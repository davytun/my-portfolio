import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Spotlight } from "../ui/Spotlight";

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={container}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-dark-bg"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Background Grid - Subtle Texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="z-10 flex flex-col items-center justify-center w-full px-4 text-center">
        {/* Kinetic Typography - Solid & Bold */}
        <motion.div
          style={{ x: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="w-full flex justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, x: -100, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for luxury feel
            className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-white whitespace-nowrap"
          >
            Digital
          </motion.h1>
        </motion.div>

        <motion.div
          style={{ x: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          className="w-full flex justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, x: 100, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 whitespace-nowrap"
          >
            Architect
          </motion.h1>
        </motion.div>

        <div className="mt-16 max-w-2xl">
          <TextGenerateEffect
            words="Building high-performance digital experiences that define brands and drive growth."
            className="text-xl md:text-2xl text-slate-400 font-light tracking-wide leading-relaxed"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-12 bg-slate-800 overflow-hidden relative">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
