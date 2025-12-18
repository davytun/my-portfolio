import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { GsapReveal } from "../ui/GsapReveal";
import Magnetic from "../ui/Magnetic";
import { BackgroundBeams } from "../ui/background-beams";
import { ContactForm } from "../ui/contact-form";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[90vh] bg-dark-bg flex flex-col justify-between pt-32 px-4 border-t border-slate-800 relative w-full overflow-hidden"
    >
      <BackgroundBeams className="opacity-40" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Info & CTA */}
          <div className="flex flex-col items-start">
            <span className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-8">
              Get in touch
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[0.9] tracking-tight">
              <GsapReveal delay={0.1}>
                Let's start a <br /> project together.
              </GsapReveal>
            </h2>

            <div className="max-w-md mb-12">
              <TextGenerateEffect
                words="Have a project in mind? I'm always open to discussing new ideas, opportunities, and specialized payment integrations."
                className="text-slate-400 text-lg leading-relaxed"
              />
            </div>

            <div className="flex gap-4 items-center">
              <a
                href="/cv.pdf"
                download="David_Akintunde_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-900 font-medium hover:bg-white transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <Magnetic>
                <a
                  href="mailto:davidakintunde@gmail.com"
                  className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-white transition-colors"
                >
                  Email Me
                </a>
              </Magnetic>
            </div>

            <div className="mt-16">
              <h4 className="text-white font-bold mb-6">Socials</h4>
              <ul className="flex flex-wrap gap-6 text-slate-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white flex items-center gap-1"
                  >
                    LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white flex items-center gap-1"
                  >
                    Twitter <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white flex items-center gap-1"
                  >
                    GitHub <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 md:p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-6">
              Send a message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>

      <footer className="w-full text-center py-8 border-t border-slate-900 mt-24">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
          <span>
            © {new Date().getFullYear()} David Akintunde. All rights reserved.
          </span>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>
              Local Time:{" "}
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "Africa/Lagos",
              })}{" "}
              WAT
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
