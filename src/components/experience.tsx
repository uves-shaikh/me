import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work" as const,
    title: "Software Engineer",
    company: "TechStaunch Software Solutions Pvt. Ltd.",
    period: "Jan 2024 – Present",
    points: [
      "Built scalable full-stack applications using React, Next.js, Node.js, and GraphQL",
      "Optimized MongoDB, PostgreSQL, Neo4j queries — reduced response time by 40%",
      "Built animated UI systems — increased user engagement by 25%",
      "Implemented role-based dashboards — reduced manual workflows by 30%",
    ],
  },
  {
    type: "work" as const,
    title: "Software Engineer Intern",
    company: "Webforest LLP",
    period: "Jul 2022 – Dec 2023",
    points: [
      "Built production-ready e-commerce application end-to-end",
      "Implemented Context API state management for complex data flows",
      "Improved frontend performance by 20% through optimization techniques",
      "Integrated REST APIs with robust error handling",
    ],
  },
  {
    type: "education" as const,
    title: "B.E. Computer Engineering",
    company: "Gujarat Technological University",
    period: "Graduated June 2024 · CGPA: 8.96",
    points: [],
  },
  {
    type: "education" as const,
    title: "H.S.C with Science",
    company: "G.S.E.B",
    period: "Mar 2020 · 96.42%",
    points: [],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-wider uppercase mb-4 block">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Professional <span className="text-gradient">journey</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center">
                  {exp.type === "work" ? (
                    <Briefcase size={16} className="text-primary" />
                  ) : (
                    <GraduationCap size={16} className="text-primary" />
                  )}
                </div>

                <div className="glass-card rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-base font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-primary mb-4">{exp.company}</p>
                  {exp.points.length > 0 && (
                    <ul className="space-y-2">
                      {exp.points.map((point, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <span className="text-primary mt-1.5 shrink-0">
                            •
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
