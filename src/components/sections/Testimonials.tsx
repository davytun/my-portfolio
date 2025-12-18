import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { GsapReveal } from "../ui/GsapReveal";

const testimonials = [
  {
    quote:
      "The attention to detail and animations are simply world-class. It feels like a site from the future.",
    name: "Alex Morgan",
    title: "CTO @ TechFlow",
  },
  {
    quote:
      "Transformed our brand identity completely. The new platform converts 40% better than the old one.",
    name: "Sarah Chen",
    title: "Founder, Artistry",
  },
  {
    quote:
      "Incredible technical expertise. They solved complex performance issues while keeping the design pristine.",
    name: "Marcus Johnson",
    title: "VP Engineering, Scalar",
  },
  {
    quote:
      "A true partner in design. They understood our vision immediately and executed flawlessly.",
    name: "Emily Davis",
    title: "Design Lead, Creative Co",
  },
  {
    quote:
      "Fast, reliable, and stunning work. The magnetic interactions perfectly capture our brand vibe.",
    name: "David Park",
    title: "Product Manager, NextLevel",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-dark-bg border-t border-slate-800 overflow-hidden relative">
      <div className="container px-4 mx-auto mb-12">
        <GsapReveal>
          <span className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
            Trusted by Industry Leaders.
          </h2>
        </GsapReveal>
      </div>
      <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Testimonials;
