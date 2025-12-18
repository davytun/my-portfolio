import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response("Only POST requests allowed", {
      status: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing API key" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    const toEmail = "davidakintunde433@gmail.com";

    const styledHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 5px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #0055e9;">New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      </div>
    `;

    const confirmHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 5px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #0055e9;">Thank You, ${name}!</h2>
          <p>We’ve received your message and will get back to you shortly.</p>
          <hr style="margin: 20px 0;" />
          <p><strong>Your Message:</strong></p>
          <p><em>Subject:</em> ${subject}</p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
          <p style="margin-top: 30px;">Best regards,<br><strong>David</strong></p>
        </div>
      </div>
    `;

    // Sending email to admin
    const sendToAdmin = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Website Form <onboarding@resend.dev>",
        to: [toEmail],
        subject: `[Contact Form] ${subject}`,
        html: styledHtml,
      }),
    });

    // Sending confirmation email to the user
    const sendToUser = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "David <onboarding@resend.dev>",
        to: [email],
        subject: `We've received your message – Thank you!`,
        html: confirmHtml,
      }),
    });

    const [adminRes, userRes] = await Promise.all([sendToAdmin, sendToUser]);

    // Check if both requests are successful
    if (!adminRes.ok || !userRes.ok) {
      return new Response(JSON.stringify({ error: "Failed to send emails" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const adminResult = await adminRes.json();
    const userResult = await userRes.json();

    return new Response(
      JSON.stringify({ success: true, admin: adminResult, user: userResult }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
});
