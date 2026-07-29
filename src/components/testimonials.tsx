'use client'
import { motion } from "framer-motion";
import { testimonials } from "../data/data";

const Testimonials = () => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#130b1c] via-[#130b1c]/80 to-transparent opacity-30" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <span className="text-[#6f1cd7] text-sm tracking-[0.2em] uppercase mb-4 block font-medium">Kind Words</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clashbold text-white mb-6 tracking-tight">
            What People Say
          </h2>
          <div className="h-[1px] w-16 bg-[#6f1cd7] opacity-50 mb-8" />
          <p className="text-[#FFFFFF99] text-lg max-w-2xl font-light leading-relaxed">
            Feedback from clients and collaborators I&#39;ve worked with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative bg-[#130b1c]/60 backdrop-blur-sm border border-[#ffffff08] p-8 rounded-sm"
            >
              <div className="text-[#6f1cd7] text-3xl mb-4 font-serif leading-none">&ldquo;</div>
              <p className="text-[#FFFFFFCC] text-sm leading-relaxed mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6f1cd7] to-purple-400 flex items-center justify-center text-white text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-[#FFFFFF80] text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-[#6f1cd7]/30 to-transparent" />
      </div>
    </section>
  );
};

export default Testimonials;