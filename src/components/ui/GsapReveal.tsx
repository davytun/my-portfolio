"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface GsapRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GsapReveal = ({
  children,
  className,
  delay = 0,
}: GsapRevealProps) => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!element.current) return;

    gsap.fromTo(
      element.current,
      {
        y: 50,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [delay]);

  return (
    <div ref={element} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
};
