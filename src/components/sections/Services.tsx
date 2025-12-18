import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { GsapReveal } from "../ui/GsapReveal";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { useState } from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

const services: Service[] = [
  {
    id: "01",
    title: "Web Engineering",
    description:
      "We build scalable, high-performance web applications using modern architectures. From complex dashboards to immersive 3D experiences.",
    tags: ["React", "Next.js", "WebGL", "Performance"],
  },
  {
    id: "02",
    title: "Product Design",
    description:
      "User-centric design that drives engagement. Crafting intuitive interfaces and seamless user journeys that convert.",
    tags: ["UI/UX", "Design Systems", "Prototyping", "User Testing"],
  },
  {
    id: "03",
    title: "Backend Architecture",
    description:
      "Robust server-side solutions ensuring data integrity, security, and speed. Built to scale with your business.",
    tags: ["Node.js", "PostgreSQL", "API Design", "Cloud Infrastructure"],
  },
  {
    id: "04",
    title: "Mobile Solutions",
    description:
      "Native-quality mobile experiences for iOS and Android. Reaching your audience wherever they are.",
    tags: ["React Native", "Expo", "iOS", "Android"],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>("01");

  return (
    <section
      id="services"
      className="py-24 bg-dark-bg border-t border-slate-800 relative overflow-hidden"
    >
      {/* Background Pattern - Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <div>
            <span className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-4 block">
              Our Expertise
            </span>
            <GsapReveal delay={0.1}>
              <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
                Future-Ready <br /> Solutions.
              </h2>
            </GsapReveal>
          </div>
          <div className="mt-8 md:mt-0 max-w-sm">
            <TextGenerateEffect
              words="Combining cutting-edge technology with strategic design to build products that define tomorrow."
              className="text-slate-400 text-lg font-light leading-relaxed"
            />
          </div>
        </div>

        <div className="space-y-0">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-b border-slate-800 last:border-b-0 cursor-pointer group"
              onClick={() =>
                setActiveService(
                  activeService === service.id ? null : service.id
                )
              }
              onMouseEnter={() => setActiveService(service.id)}
            >
              <div className="py-10 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between transition-colors duration-300 group-hover:bg-slate-900/20 px-0 md:px-8 mx-0 md:-mx-8 rounded-xl">
                <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
                  <span className="font-mono text-slate-500 text-sm md:text-base">
                    /{service.id}
                  </span>
                  <h3
                    className={`text-3xl md:text-5xl font-bold transition-colors duration-300 ${activeService === service.id ? "text-white" : "text-slate-500 group-hover:text-slate-300"}`}
                  >
                    {service.title}
                  </h3>
                </div>

                <div>
                  <motion.div
                    animate={{ rotate: activeService === service.id ? 180 : 0 }}
                    className="text-white bg-slate-800 p-3 rounded-full"
                  >
                    {activeService === service.id ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {activeService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-16 flex flex-col md:flex-row gap-12 pl-0 md:pl-[120px] px-0 md:px-8 mx-0 md:-mx-8">
                      <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-3 content-start">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 rounded-full border border-slate-700 text-slate-400 text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
