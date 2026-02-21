import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { value: 40, suffix: "%", label: "Faster DB Queries", description: "Optimized MongoDB, PostgreSQL & Neo4j" },
  { value: 30, suffix: "%", label: "Workflow Reduction", description: "Automated manual processes" },
  { value: 25, suffix: "%", label: "Engagement Increase", description: "Through animated UI systems" },
  { value: 20, suffix: "%", label: "Performance Boost", description: "Frontend optimization gains" },
];

const Counter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, value]);

  return (
    <span className="text-4xl sm:text-5xl font-bold text-gradient tabular-nums">
      {display}{suffix}
    </span>
  );
};

const Metrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-mono text-primary tracking-wider uppercase mb-4 block">
            Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Results that <span className="text-gradient">matter</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <Counter value={metric.value} suffix={metric.suffix} inView={isInView} />
              <p className="text-sm font-semibold text-foreground mt-3 mb-1">{metric.label}</p>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
