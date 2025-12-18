import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GsapReveal } from "../ui/GsapReveal";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
  className?: string; // For grid span control
}

const projects: Project[] = [
  {
    id: 1,
    title: "PFOS Solar",
    category: "Corporate & Lead Gen",
    image: "/pfos.png",
    description:
      "Full corporate site with product catalog and lead capture for a renewable energy brand.",
    link: "https://pfossolar.com/",
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "Fittingz",
    category: "SaaS / CRM",
    image: "/fittingz.png",
    description:
      "Custom client management system for tailors & designers. Reduced onboarding time by 80%.",
    link: "https://fittingz.vercel.app/",
    className: "md:col-span-1",
  },
  {
    id: 3,
    title: "Altair Attic",
    category: "Brand Identity",
    image: "/altair-attic.png",
    description:
      "Modern, fast-loading corporate site enabling strong visual identity and engagement.",
    link: "https://altair-attic.com/",
    className: "md:col-span-1",
  },
  {
    id: 4,
    title: "FDP Hub",
    category: "Content Platform",
    image: "/fdphub.png",
    description:
      "Modern content management & distribution system built with Next.js.",
    link: "https://fdp-channel-hub.vercel.app/",
    className: "md:col-span-2",
  },
  {
    id: 5,
    title: "Vaspa",
    category: "Web Application",
    image: "/vaspa.png",
    description:
      "Africa’s network for virtual asset innovators, regulators, and service providers. Building trust, clarity, and collaboration across the ecosystem.",
    link: "https://vaspa.org/",
    className: "md:col-span-2 md:col-start-2", // Centered or offset for variety
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-dark-bg border-t border-slate-800 relative overflow-hidden"
    >
      {/* Background Pattern - Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="mb-24">
          <span className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-4 block">
            Recent Deployments
          </span>
          <GsapReveal>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              Selected Work
              <br />
              <span className="text-slate-500">& Impact.</span>
            </h2>
          </GsapReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group cursor-pointer ${project.className || "md:col-span-1"}`}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] md:aspect-auto md:h-[380px] border border-slate-800 group-hover:border-slate-600 transition-colors duration-500">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                  />

                  <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-slate-500 text-sm font-mono">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm max-w-md">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="https://github.com/davytun"
            className="inline-block border border-slate-700 hover:border-white text-white px-8 py-4 rounded-full transition-all duration-300 uppercase tracking-widest text-xs hover:bg-white hover:text-black"
          >
            View Entire Archive
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
