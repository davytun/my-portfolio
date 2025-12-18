"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // POST to the PHP script ensuring headers are set for JSON
      const response = await fetch("/send-mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send message");
      }

      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      toast.error("Something went wrong.", {
        description: "Please try again or email me directly.",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 w-full max-w-md"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-400">
          Name
        </label>
        <input
          {...form.register("name")}
          id="name"
          placeholder="John Doe"
          className={cn(
            "flex h-12 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-700 disabled:cursor-not-allowed disabled:opacity-50",
            form.formState.errors.name && "border-red-500 focus:ring-red-500"
          )}
        />
        {form.formState.errors.name && (
          <p className="text-xs text-red-500">
            {form.formState.errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-400">
          Email
        </label>
        <input
          {...form.register("email")}
          id="email"
          type="email"
          placeholder="john@example.com"
          className={cn(
            "flex h-12 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-700 disabled:cursor-not-allowed disabled:opacity-50",
            form.formState.errors.email && "border-red-500 focus:ring-red-500"
          )}
        />
        {form.formState.errors.email && (
          <p className="text-xs text-red-500">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-400">
          Message
        </label>
        <textarea
          {...form.register("message")}
          id="message"
          placeholder="Tell me about your project..."
          className={cn(
            "flex min-h-[120px] w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-700 disabled:cursor-not-allowed disabled:opacity-50 resize-y",
            form.formState.errors.message && "border-red-500 focus:ring-red-500"
          )}
        />
        {form.formState.errors.message && (
          <p className="text-xs text-red-500">
            {form.formState.errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          "bg-white text-slate-950 hover:bg-slate-200 h-12 px-8 w-full"
        )}
      >
        {isSubmitting ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Send className="mr-2 h-4 w-4" />
        )}
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};
