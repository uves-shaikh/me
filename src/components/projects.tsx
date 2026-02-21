import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, Rocket, Brain, Globe } from "lucide-react";

const projects = [
  {
    icon: <Rocket size={20} />,
    codename: "Project Alpha",
    title: "Business Growth Operating System",
    stack: ["React", "Node.js", "Neo4j", "Mapbox", "Python"],
    summary:
      "A multi-panel platform for managing business operations with spatial visualization and real-time data workflows.",
    problem:
      "Businesses lacked a unified system to manage user operations, admin workflows, and data correction—all in one place with spatial context.",
    contribution:
      "Architected and built 3 independent panels (User, Admin, Data Correction) with real-time notifications, Mapbox spatial visualization, and Python + Cypher automation pipelines.",
    impact:
      "Enabled real-time spatial insights and automated data workflows, significantly reducing manual correction time and improving operational efficiency.",
  },
  {
    icon: <Brain size={20} />,
    codename: "Project Zenith",
    title: "AI-Powered Radiology Reporting Platform",
    stack: ["React", "Node.js", "MongoDB", "Clerk", "Razorpay", "shadcn/ui"],
    summary:
      "Structured reporting platform for radiologists with AI-assisted auto-filled findings and guided workflows.",
    problem:
      "Radiologists spent excessive time on manual, unstructured reporting, leading to inconsistencies and slower turnaround.",
    contribution:
      "Built structured reporting templates with auto-filled findings, guided workflow, Clerk authentication, Razorpay payment integration, and polished UI with shadcn/ui.",
    impact:
      "Streamlined the entire radiology reporting workflow, enabling faster, more consistent report generation with built-in monetization.",
  },
  {
    icon: <Globe size={20} />,
    codename: "Project Nova",
    title: "Network Infrastructure Services Platform",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Server Components"],
    summary:
      "High-performance infrastructure platform with end-to-end type safety and server-client architecture.",
    problem:
      "The existing platform suffered from performance bottlenecks and type inconsistencies between frontend and backend.",
    contribution:
      "Rebuilt using Next.js App Router with server + client component architecture, end-to-end TypeScript type safety, and optimized data fetching patterns.",
    impact:
      "Achieved 20% frontend performance improvement with full type safety, reducing bugs and improving developer velocity.",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-wider uppercase mb-4 block">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Featured <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 flex flex-col hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedProject(i)}
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary mb-5">
                {project.icon}
              </div>
              <span className="text-xs font-mono text-muted-foreground mb-1">
                {project.codename}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-xs text-primary font-medium group-hover:underline">
                View Details →
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary mb-5">
                {projects[selectedProject].icon}
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                {projects[selectedProject].codename}
              </span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-6">
                {projects[selectedProject].title}
              </h3>

              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Problem
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {projects[selectedProject].problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    My Contribution
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {projects[selectedProject].contribution}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Impact
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {projects[selectedProject].impact}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
