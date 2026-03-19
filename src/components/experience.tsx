'use client'

import Resume from "./resume";
const resumeUrl = '/pdf/resume.pdf';
import { motion } from "framer-motion";

export const projects = [
  {
    name: "My Portfolio",
    company: "Personal Project",
    location: "Remote",
    period: "2025",
    desc: "Personal Portfolio Website",
    tech: "Next.js + TailwindCSS + Framer Motion",
    link: "https://my-portfolio-lyart-ten-93.vercel.app/",
    details: [
      "Built a personal portfolio website showcasing projects, skills, and professional experience.",
      "Designed a modern, responsive UI using Next.js App Router, Tailwind CSS and Framer Motion animations.",
      "Integrated a CV download feature and contact form for seamless recruiter engagement."
    ]
  },
  {
    name: "ShopMate E-Commerce",
    company: "Fullstack E-Commerce",
    location: "Production App",
    period: "2025 - 2026",
    desc: "Full-stack AI-powered e-commerce platform",
    tech: "React.js + Node.js + TypeScript + PostgreSQL",
    link: "https://shop-mate-six-azure.vercel.app/",
    details: [
      "Developed a robust storefront with complex state management using Redux/Context API.",
      "Implemented a full-featured Admin Dashboard for product, order, and customer management.",
      "Integrated Stripe API for secure payment processing and Google Gemini AI for intelligent product search.",
      "Managed relational database architecture using PostgreSQL and optimized query performance."
    ]
  }
];

const Experience = () => {
  return (
    <section className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#130b1c] via-[#130b1c]/80 to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[#6f1cd7] text-sm tracking-[0.25em] uppercase mb-4 block font-medium">Professional Journey</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clashbold text-white mb-6 tracking-tight">
            Work Experience
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#6f1cd7] to-transparent mb-8" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-12 top-0 w-[1px] h-full bg-gradient-to-b from-[#6f1cd7]/40 via-[#6f1cd7]/20 to-transparent" />

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-6 md:pl-24"
              >
                <div className="absolute left-0 top-3 transform -translate-x-1/2">
                  <div className="w-5 h-5 rounded-full bg-[#130b1c] border-2 border-[#6f1cd7] shadow-lg shadow-[#6f1cd7]/20" />
                </div>

                <motion.div
                  whileHover={{ scale: 1.01, backgroundColor: 'rgba(111, 28, 215, 0.04)' }}
                  className="group relative bg-[#130b1c]/60 backdrop-blur-sm border border-[#ffffff08] p-8 rounded-sm transition-all duration-500"
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <h3 className="text-2xl md:text-3xl font-clashbold text-white">
                        {project.name}
                      </h3>
                      {project.link && (
                        <a href={project.link} target="_blank" className="text-xs text-[#6f1cd7] border border-[#6f1cd7] px-3 py-1 rounded-full hover:bg-[#6f1cd7] hover:text-white transition-all">
                          View Project
                        </a>
                      )}
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 my-4">
                      <p className="text-[#6f1cd7] font-medium tracking-wide">{project.company}</p>
                      <div className="flex items-center gap-4">
                        <span className="hidden md:inline text-[#FFFFFF40]">•</span>
                        <span className="text-[#FFFFFF99] text-sm">{project.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {project.details.map((item, i) => (
                        <li key={i} className="text-[#FFFFFF99] leading-relaxed font-light flex items-start">
                          <span className="text-[#6f1cd7] mr-3 mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pl-16 md:pl-24"
          >
            <Resume pdfUrl={resumeUrl} fileName="GeorgeDaniel_Resume.pdf" buttonText="Download CV" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;