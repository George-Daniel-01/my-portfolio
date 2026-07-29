"use client"
import { Arrow } from "./svgs";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../data/data";

const techColors: Record<string, string> = {
  "React.js": "from-cyan-500/20 to-cyan-500/5 text-cyan-300 border-cyan-500/30",
  "React": "from-cyan-500/20 to-cyan-500/5 text-cyan-300 border-cyan-500/30",
  "Next.js": "from-white/20 to-white/5 text-white border-white/30",
  "TypeScript": "from-blue-500/20 to-blue-500/5 text-blue-300 border-blue-500/30",
  "JavaScript": "from-yellow-500/20 to-yellow-500/5 text-yellow-300 border-yellow-500/30",
  "Node.js": "from-green-500/20 to-green-500/5 text-green-300 border-green-500/30",
  "Express": "from-gray-500/20 to-gray-500/5 text-gray-300 border-gray-500/30",
  "PostgreSQL": "from-blue-500/20 to-blue-500/5 text-blue-300 border-blue-500/30",
  "Vite": "from-purple-500/20 to-purple-500/5 text-purple-300 border-purple-500/30",
  "TailwindCSS": "from-teal-500/20 to-teal-500/5 text-teal-300 border-teal-500/30",
  "Chart.js": "from-pink-500/20 to-pink-500/5 text-pink-300 border-pink-500/30",
  "Styled-Components": "from-pink-500/20 to-pink-500/5 text-pink-300 border-pink-500/30",
  "Playwright": "from-green-500/20 to-green-500/5 text-green-300 border-green-500/30",
  "Redux Toolkit": "from-violet-500/20 to-violet-500/5 text-violet-300 border-violet-500/30",
  "Recharts": "from-orange-500/20 to-orange-500/5 text-orange-300 border-orange-500/30",
  "PWA": "from-indigo-500/20 to-indigo-500/5 text-indigo-300 border-indigo-500/30",
  "Workbox": "from-indigo-500/20 to-indigo-500/5 text-indigo-300 border-indigo-500/30",
};

const defaultColor = "from-purple-500/20 to-purple-500/5 text-purple-300 border-purple-500/30";

function Pill({ tech }: { tech: string }) {
  const color = techColors[tech] || defaultColor;
  return (
    <span className={`inline-block px-2.5 py-0.5 text-[10px] font-medium rounded-full border bg-gradient-to-r ${color}`}>
      {tech}
    </span>
  );
}

const sorted = [...projects].sort((a, b) => {
  if (a.featured && !b.featured) return -1;
  if (!a.featured && b.featured) return 1;
  return 0;
});

const Projects = () => {
    return (
        <section id="projects" className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#130b1c] to-transparent opacity-40" />

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-5"
                >
                    <h2 className="text-2xl md:text-3xl font-clashbold text-white mb-6 tracking-tight">
                        Projects
                        <span className="inline-block ml-4 transform hover:scale-110 transition-transform">🚀</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-6" />
                    <p className="text-[#FFFFFF99] text-base md:text-lg ">
                        Showcasing my latest works and experiments in tech
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sorted.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`group relative bg-[#130b1c]/80 backdrop-blur-lg rounded-lg overflow-hidden border ${
                                project.featured ? 'border-purple-500/40' : 'border-[#ffffff10]'
                            }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-8 flex flex-col h-full">
                                {project.featured && (
                                    <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-semibold px-3 py-1 rounded-bl-lg tracking-wider uppercase">
                                        Featured
                                    </div>
                                )}

                                <h3 className="text-white text-2xl font-clashbold mb-3">
                                    {project.name}
                                </h3>

                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.lang.split(" + ").map((tech) => (
                                        <Pill key={tech} tech={tech} />
                                    ))}
                                </div>

                                <p className="text-[#FFFFFF99] text-sm flex-grow">
                                    {project.desc}
                                </p>

                                {project.details && project.details.length > 0 && (
                                    <ul className="mt-4 space-y-2">
                                        {project.details.map((detail, i) => (
                                            <li key={i} className="text-[#FFFFFF80] text-xs flex items-start gap-2">
                                                <span className="text-purple-400 mt-0.5 shrink-0">▸</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center group/link"
                                    >
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-center space-x-3 text-white hover:text-purple-300 transition-colors"
                                        >
                                            <span className="text-sm font-medium">View Project</span>
                                            <Arrow className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                                        </motion.div>
                                    </Link>
                                    {project.secondaryLink && (
                                        <Link
                                            href={project.secondaryLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center group/link"
                                        >
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                className="flex items-center space-x-3 text-[#FFFFFF99] hover:text-purple-300 transition-colors"
                                            >
                                                <span className="text-sm font-medium">Admin Dashboard</span>
                                                <Arrow className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                                            </motion.div>
                                        </Link>
                                    )}
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center group/link"
                                        >
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                className="flex items-center space-x-3 text-[#FFFFFF99] hover:text-purple-300 transition-colors"
                                            >
                                                <span className="text-sm font-medium">View Code</span>
                                                <Arrow className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                                            </motion.div>
                                        </Link>
                                    )}
                                </div>

                                <div className={`h-[2px] w-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 absolute bottom-0 left-0`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;