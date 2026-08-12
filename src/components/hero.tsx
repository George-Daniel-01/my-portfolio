'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FbIcon, IgIcon, InIcon, TwIcon } from "./svgs";
import Image from 'next/image';
import { socialLinks } from "../data/data";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <section ref={sectionRef} id="hero" className="mx-auto px-6 sm:px-[38px] pt-[100px] md:px-[26px] lg:pt-[120px] lg:pl-[80px] lg:pr-[40px]">
        <div className="flex flex-col items-start flex-1 md:flex md:flex-row md:gap-10 md:items-center lg:flex lg:flex-row lg:items-center lg:gap-x-12 lg:justify-between">
          
          {/* LEFT SIDE - TEXT */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-green-500/15 text-green-400 border border-green-500/30 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for Work
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-purple-500/15 text-purple-400 border border-purple-500/30 tracking-wide">
                Currently Building ShopMate & Spotify
              </span>
            </div>
            <div className="gradientText">
              <h1 className="text-white font-clashbold">
                Creative Software Engineer<span>.</span>
              </h1>
            </div>
            <p className="gradientText font-medium font-pop text-[15px] text-[#FFFFFF99] max-w-[353px] mt-[45px] md:mt-8 lg:mt-1 md:max-w-[639px] md:text-[18px] md:leading-[27px]">
              I build AI-powered platforms, payment infrastructure, and real-time collaborative tools used by real users.
            </p>
            <div
              id="intro"
              className="text-[#F0FEFF] font-pop flex-shrink-0 text-[.9em] leading-[1.5] font-medium mt-[40px] flex flex-col gap-8 md:flex md:flex-col md:gap-[20px] md:mt-[45px] lg:flex lg:flex-row lg:items-start lg:gap-[12px]"
            >
              <p className="max-w-[320px]">
                I architect and ship full-stack products — from AI-powered e-commerce
                platforms processing Stripe payments to real-time collaborative
                whiteboards with end-to-end encryption. React, Node.js, PostgreSQL.
              </p>
              <p className="max-w-[320px]">
                Self-taught, 5+ years in production. I don&#39;t just build demos —
                I build things people pay for. Every project on this site has
                real users and real transactions.
              </p>
            </div>

            <div className="mt-[35px] md:mt-[45px] flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-block px-6 py-3 bg-[#6f1cd7] text-white font-medium text-sm rounded hover:bg-[#5a16b0] transition-colors">
                Hire Me
              </a>
              <a href="/pdf/resume.pdf" target="_blank" className="inline-block px-6 py-3 border border-[#6f1cd7] text-[#6f1cd7] font-medium text-sm rounded hover:bg-[#6f1cd7] hover:text-white transition-colors">
                Download CV
              </a>
            </div>

            <div className="mt-[35px] md:mt-[45px] flex justify-start items-center gap-[26px] md:gap-[40px]">
              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.95 }}
              >
                <FbIcon fill="#6f1cd7" className="w-[30px] h-[30px] rounded-full border-[#6f1cd7] border-solid border-[2px] p-0.5 transition-all duration-500 hover:bg-white" />
              </motion.a>

              <motion.a
                href={socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.95 }}
              >
                <TwIcon fill="#6f1cd7" className="w-[30px] h-[30px] rounded-full border-[#6f1cd7] border-solid border-[2px] p-1 transition-all duration-500 hover:bg-white" />
              </motion.a>

              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.95 }}
              >
                <IgIcon fill="#6f1cd7" className="w-[30px] h-[30px] rounded-full border-[#6f1cd7] border-solid border-[2px] p-0.5 transition-all duration-500 hover:bg-white" />
              </motion.a>

              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.95 }}
              >
                <InIcon fill="#6f1cd7" className="w-[30px] h-[30px] rounded-full border-[#6f1cd7] border-solid border-[2px] p-0.5 transition-all duration-700 hover:bg-white" />
              </motion.a>
            </div>
          </div>

          {/* RIGHT SIDE - PHOTO */}
          <div className="mt-[2.5rem] md:mt-0 w-full md:w-[280px] lg:w-[380px] flex-shrink-0">
            <div className="relative w-full max-w-[280px] mx-auto md:mx-0 lg:max-w-[380px]">
              {/* Purple border box (offset behind) */}
              <div className="absolute inset-0 border-[3px] border-[#6f1cd7] translate-x-3 translate-y-3 lg:translate-x-5 lg:translate-y-5" />
              
              {/* Your photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ y: imageY, opacity }}
                className="relative z-10 w-full aspect-[280/340] lg:aspect-[380/460] overflow-hidden"
              >
                <Image
                  src="/images/hero.png"
                  alt="George Daniel"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 280px, 380px"
                  className="object-cover object-top"
                  draggable={false}
                  priority
                />
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;