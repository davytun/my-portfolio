import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import { useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Portfolio | Creative Developer";

    // Add meta description
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Professional portfolio showcasing web development and design projects. Expert in creating beautiful, functional digital experiences.";
    document.head.appendChild(metaDescription);

    // Add Open Graph tags
    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.content = "Portfolio | Creative Developer";
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.content =
      "Professional portfolio showcasing web development and design projects. Expert in creating beautiful, functional digital experiences.";
    document.head.appendChild(ogDescription);

    const ogType = document.createElement("meta");
    ogType.setAttribute("property", "og:type");
    ogType.content = "website";
    document.head.appendChild(ogType);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogType);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        {/*<Blog />*/}
        <div className="h-8 md:h-0" /> {/* Mobile bottom spacer */}
        <Contact />
      </main>
    </div>
  );
};

export default Index;
