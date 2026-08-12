"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { certifications } from "../data/data";

const Certifications = () => {
  const [viewing, setViewing] = useState<number | null>(null);

  return (
    <section id="certifications" className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#130b1c]/60 to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#6f1cd7] text-sm tracking-[0.25em] uppercase mb-4 block font-medium">Credentials</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clashbold text-white mb-6 tracking-tight">
            Certifications
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#6f1cd7] to-transparent mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#130b1c]/60 backdrop-blur-sm border border-[#ffffff08] p-6 rounded-sm transition-all duration-500"
            >
              <button
                onClick={() => setViewing(index)}
                className="block w-full text-left cursor-pointer"
                aria-label={`View ${cert.title} certificate`}
              >
                <div className="relative overflow-hidden border border-[#ffffff10] mb-6 group-hover:border-[#6f1cd7]/40 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.image}
                    alt={`${cert.title} — ${cert.issuer}`}
                    className="w-full h-auto object-contain bg-white transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-white text-sm font-medium tracking-wide">Click to enlarge</span>
                  </div>
                </div>
              </button>

              <h3 className="text-2xl font-clashbold text-white mb-2">{cert.title}</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                <p className="text-[#6f1cd7] font-medium tracking-wide">{cert.issuer}</p>
                <div className="flex items-center gap-4">
                  <span className="hidden md:inline text-[#FFFFFF40]">•</span>
                  <span className="text-[#FFFFFF99] text-sm">{cert.location}</span>
                  <span className="hidden md:inline text-[#FFFFFF40]">•</span>
                  <span className="text-[#FFFFFF99] text-sm">{cert.date}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border border-[#ffffff15] bg-[#0b040c] text-[#FFFFFFCC]">
                  Grade: {cert.grade}
                </span>
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border border-[#ffffff15] bg-[#0b040c] text-[#FFFFFFCC]">
                  Credential: {cert.credentialId}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {viewing !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setViewing(null)}
        >
          <div className="relative max-w-3xl w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={certifications[viewing].image}
              alt={`${certifications[viewing].title} — ${certifications[viewing].issuer}`}
              className="w-full h-auto bg-white"
            />
            <button
              onClick={() => setViewing(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#6f1cd7] transition-colors text-sm tracking-wide uppercase font-medium"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
