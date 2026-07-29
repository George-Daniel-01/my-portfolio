"use client"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Production Apps Deployed", value: 7, suffix: "" },
  { label: "Years Engineering Experience", value: 5, suffix: "+" },
  { label: "Payment Integrations", value: 3, suffix: "" },
  { label: "AI/ML Integrations", value: 2, suffix: "" },
];

const coreTech = [
  "React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
  "Stripe API", "TailwindCSS", "Docker", "Python", "Google APIs"
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || counted.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 1500;
          const steps = 30;
          const stepTime = duration / steps;
          let current = 0;
          const timer = setInterval(() => {
            current++;
            setCount(Math.min(Math.round((target / steps) * current), target));
            if (current >= steps) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const Highlights = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#6f1cd7] text-sm tracking-[0.2em] uppercase mb-4 block font-medium">By The Numbers</span>
          <div className="h-[1px] w-16 bg-[#6f1cd7] opacity-50 mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-clashbold text-white mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[#FFFFFF99] text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-[#6f1cd7] text-sm tracking-[0.2em] uppercase mb-6 block font-medium">Core Stack</span>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {coreTech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="inline-block px-4 py-2 text-sm font-medium rounded-full border border-[#ffffff15] bg-[#130b1c]/80 text-[#FFFFFFCC] hover:border-[#6f1cd7]/50 hover:text-white transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-[#6f1cd7]/30 to-transparent" />
      </div>
    </section>
  );
};

export default Highlights;