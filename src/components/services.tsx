'use client'
import { motion } from "framer-motion";
import {
    Smartphone,
    Code,
    Server
} from 'lucide-react';

const services = [
    {
        id: 1,
        title: "AI-POWERED APPLICATIONS",
        description: "Integrating LLMs and AI search into production apps — natural language product search via OpenRouter/Anthropic, AI-powered recommendations, and intelligent query processing.",
        icon: Code,
        category: "AI"
    },
    {
        id: 2,
        title: "PAYMENT INFRASTRUCTURE",
        description: "End-to-end payment pipeline design: Stripe Checkout + webhooks, Paystack integration for African markets, subscription billing, refund reconciliation, and PCI-compliant architecture.",
        icon: Server,
        category: "Payments"
    },
    {
        id: 3,
        title: "REAL-TIME SYSTEMS",
        description: "Socket.io-based real-time collaboration, PWA offline support with Workbox service workers, live dashboards with Recharts, and OAuth 2.0 integrations (Google, Zoom, Google Calendar).",
        icon: Smartphone,
        category: "RealTime"
    }
];


const Services = () => {
    return (
        <section id="services" className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 " />

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-5"
                >
                    <h1 className="text-2xl md:text-3xl font-clashbold text-white mb-6 tracking-tight">
                        Services
                        <span className="inline-block ml-4 transform hover:scale-110 transition-transform">🔥</span>
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-6" />
                    <p className="text-[#FFFFFF99] text-base md:text-lg ">
                        What I actually build day-to-day
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: service.id * 0.05 }}

                            whileHover={{
                                scale: 1.02,
                                translateY: -5,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                            }}
                            className="group relative bg-[#130b1c]/80 backdrop-blur-lg rounded-lg overflow-hidden border border-[#ffffff10]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-8 h-8 text-purple-500" strokeWidth={1.5} />
                                    </span>
                                    <div className="h-px w-16 bg-gradient-to-r from-purple-500 to-blue-500 opacity-50" />
                                </div>

                                <h3 className="text-white text-xl  font-clashbold mb-4 tracking-wide">
                                    {service.title}
                                </h3>

                                <p className="text-[#FFFFFF99] text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="h-[2px] w-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
