import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-xs font-mono text-primary tracking-wider uppercase mb-4 block">
            About
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
            Engineering with{" "}
            <span className="text-gradient">purpose & precision</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a full-stack engineer who thrives at the intersection of clean
              architecture and measurable impact. With hands-on experience
              building scalable applications across React, Next.js, Node.js, and
              multiple databases, I focus on systems that perform under pressure
              and scale with the business.
            </p>
            <p>
              My work has delivered tangible results — 40% faster database
              queries, 25% higher user engagement, and 30% reduction in manual
              workflows. I don't just write code; I engineer solutions that move
              metrics.
            </p>
            <p>
              I approach every project with an architectural mindset — thinking
              about performance, maintainability, and developer experience from
              day one. Whether it's optimizing complex graph database queries,
              building role-based dashboards, or crafting pixel-perfect UI
              systems, I bring the same rigor and attention to detail.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
