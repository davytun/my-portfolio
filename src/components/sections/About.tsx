"use client";
import { motion } from "framer-motion";
import { GsapReveal } from "../ui/GsapReveal";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import {
  IconSignature,
  IconTerminal2,
  IconCode,
  IconTools,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-dark-bg border-t border-slate-800 relative z-20 overflow-hidden"
    >
      {/* Background Pattern - Dot Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto mb-16 px-4">
          <GsapReveal
            delay={0.2}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            More than just code.
            <br />
            <div className="inline-block">
              <TextGenerateEffect
                words="I design and build digital experiences."
                className="text-slate-500"
              />
            </div>
          </GsapReveal>
        </div>

        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[25rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={
                <span className="text-xl text-white font-semibold">
                  {item.title}
                </span>
              }
              description={
                <span className="text-sm text-slate-400 leading-relaxed block mt-2">
                  {item.description}
                </span>
              }
              header={item.header}
              icon={item.icon}
              className={
                i === 0 || i === 3
                  ? "md:col-span-2 text-white bg-slate-900/80 border-slate-800 backdrop-blur-sm"
                  : "text-white bg-slate-900/80 border-slate-800 backdrop-blur-sm"
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const GraphicsProfile = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden group/bento transition duration-200">
    <img
      src="/Me.jpg"
      alt="David Akintunde"
      className="absolute inset-0 w-full h-full object-cover object-[center_35%] opacity-90 group-hover/bento:opacity-100 transition-opacity duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
    <div className="absolute bottom-4 left-4 right-4 z-10">
      <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full mb-2 border border-emerald-500/20 backdrop-blur-md">
        Available for work
      </div>
    </div>
  </div>
);

const GraphicsStack = () => {
  const stack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "GSAP",
    "Node.js",
    "Express",
    "Python",
    "Postgres",
    "MongoDB",
    "Docker",
    "Paystack",
    "Flutterwave",
    "Stripe",
  ];
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] max-h-[20rem] md:max-h-none rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden flex flex-row items-center justify-center gap-4 p-4">
      <div className="absolute inset-0 bg-slate-950/50" />

      {/* Mask to fade top/bottom */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(to_bottom,rgba(2,6,23,1)_0%,transparent_20%,transparent_80%,rgba(2,6,23,1)_100%)]" />

      {/* Column 1 */}
      <div
        className="flex flex-col gap-3 relative z-10 h-[200%] -mt-10 md:-mt-0 animate-scroll-vertical"
        style={{ "--animation-duration": "30s" } as React.CSSProperties}
      >
        {[...stack, ...stack, ...stack].map((tech, i) => (
          <span
            key={`c1-${tech}-${i}`}
            className={cn(
              "px-3 py-2 rounded-lg text-xs font-medium border text-center backdrop-blur-sm",
              ["Paystack", "Flutterwave", "Stripe"].includes(tech)
                ? "bg-emerald-950/30 border-emerald-900 text-emerald-400"
                : "bg-slate-800/80 border-slate-700 text-slate-300"
            )}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Column 2 (Slower, Reverse offset effectively by speed or direction if needed, but simple vertical flow is requested) */}
      <div
        className="hidden md:flex flex-col gap-3 relative z-10 h-[200%] -mt-10 md:-mt-0 animate-scroll-vertical"
        style={{ "--animation-duration": "40s" } as React.CSSProperties}
      >
        {[...stack, ...stack, ...stack].reverse().map((tech, i) => (
          <span
            key={`c2-${tech}-${i}`}
            className={cn(
              "px-3 py-2 rounded-lg text-xs font-medium border text-center backdrop-blur-sm",
              ["Paystack", "Flutterwave", "Stripe"].includes(tech)
                ? "bg-emerald-950/30 border-emerald-900 text-emerald-400"
                : "bg-slate-800/80 border-slate-700 text-slate-300"
            )}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Column 3 - Hidden on mobile to reduce density */}
      <div
        className="hidden md:flex flex-col gap-3 relative z-10 h-[200%] -mt-10 md:-mt-0 animate-scroll-vertical"
        style={{ "--animation-duration": "35s" } as React.CSSProperties}
      >
        {[...stack, ...stack, ...stack].map((tech, i) => (
          <span
            key={`c3-${tech}-${i}`}
            className={cn(
              "px-3 py-2 rounded-lg text-xs font-medium border text-center backdrop-blur-sm",
              ["Paystack", "Flutterwave", "Stripe"].includes(tech)
                ? "bg-emerald-950/30 border-emerald-900 text-emerald-400"
                : "bg-slate-800/80 border-slate-700 text-slate-300"
            )}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        <span className="text-white font-bold text-lg bg-slate-950/90 backdrop-blur-xl px-6 py-3 rounded-full border border-slate-800 shadow-2xl">
          The Toolbox
        </span>
      </div>
    </div>
  );
};

// ... GraphicsApproach and GraphicsFocus remain similar but can be touched up if needed

const GraphicsApproach = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden group">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />

    {/* Dotted Background */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_100%,transparent_100%)] opacity-20" />

    {/* Glowing Effect on Hover */}
    <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-500" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 group-hover:border-emerald-500/50 transition-colors z-10">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
        </div>
        {/* Compass ticks */}
        <div className="absolute -inset-2 border border-slate-800 rounded-xl opacity-50 scale-110" />
        <div className="absolute -inset-4 border border-slate-800 rounded-xl opacity-30 scale-125" />
      </div>
    </div>
  </div>
);

const GraphicsFocus = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-slate-950 border border-slate-800 p-5 relative overflow-hidden group">
    {/* Code Block Look */}
    <div className="absolute top-0 left-0 w-full h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
      <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
      <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
    </div>

    <div className="mt-6 flex flex-col gap-2 font-mono text-[10px] sm:text-xs">
      <div className="flex gap-2">
        <span className="text-pink-400">const</span>
        <span className="text-yellow-200">createExperience</span>
        <span className="text-slate-400">=</span>
        <span className="text-blue-400">async</span>
        <span className="text-slate-400">()</span>
        <span className="text-slate-400">{"=>"}</span>
        <span className="text-slate-400">{"{"}</span>
      </div>
      <div className="pl-4 flex gap-2">
        <span className="text-slate-400">await</span>
        <span className="text-yellow-200">design</span>
        <span className="text-slate-400">.</span>
        <span className="text-blue-300">perfect</span>
        <span className="text-slate-400">();</span>
      </div>
      <div className="pl-4 flex gap-2">
        <span className="text-slate-400">return</span>
        <span className="text-emerald-400">"Excellence"</span>
        <span className="text-slate-400">;</span>
      </div>
      <div className="text-slate-400">{"}"}</div>
    </div>

    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-emerald-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
);

const items = [
  {
    title: "David Akintunde",
    description:
      "Creative Developer based in Lagos. I bridge the gap between design and engineering.",
    header: <GraphicsProfile />,
    icon: <IconSignature className="h-4 w-4 text-slate-500" />,
  },
  {
    title: "The Toolbox",
    description:
      "My weapons of choice for building robust, scalable applications.",
    header: <GraphicsStack />,
    icon: <IconTools className="h-4 w-4 text-slate-500" />,
  },
  {
    title: "Precision First",
    description:
      "Obsessed with performance, accessibility, and pixel-perfect details.",
    header: <GraphicsApproach />,
    icon: <IconTerminal2 className="h-4 w-4 text-slate-500" />,
  },
  {
    title: "Full-Stack Capabilities",
    description:
      "From database design to fluid frontend animations, I handle the entire product lifecycle.",
    header: <GraphicsFocus />,
    icon: <IconCode className="h-4 w-4 text-slate-500" />,
  },
];
