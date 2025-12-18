"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900",
        className
      )}
    >
      <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_center,transparent_20%,#000)]"></div>
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            initial={{
              opacity: 0,
              x: Math.random() * 1000 - 500,
              y: -100,
              scale: 0.5,
              rotate: Math.random() * 90 - 45,
            }}
            animate={{
              opacity: [0, 1, 0],
              x: Math.random() * 1000 - 500,
              y: [0, 1000],
              scale: [0.5, 1.5],
              rotate: Math.random() * 180 - 90,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
            className="absolute top-0 left-1/2 w-[1px] h-[200px] bg-gradient-to-b from-transparent via-slate-500 to-transparent opacity-20"
          />
        ))}
      </div>
    </div>
  );
};
