import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Metrics from "@/components/metrics";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const Index = () => {
  useEffect(() => {
    document.title =
      "Uves Shaikh — Full-Stack Engineer | Scalable Systems & High-Performance Apps";

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Uves Shaikh is a full-stack engineer specializing in scalable systems, performance optimization, and production-grade applications with React, Next.js, and Node.js.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Uves Shaikh is a full-stack engineer specializing in scalable systems, performance optimization, and production-grade applications with React, Next.js, and Node.js.";
      document.head.appendChild(meta);
    }

    // JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Uves Shaikh",
      jobTitle: "Full Stack Developer",
      url: window.location.href,
      email: "uves.dev@gmail.com",
      sameAs: [
        "https://github.com/uves-shaikh",
        "https://linkedin.com/in/uves-shaikh",
      ],
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Metrics />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
