'use client'
import { motion } from "framer-motion";
import { FbIcon, IgIcon, InIcon, TwIcon } from "./svgs";
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <section className="mx-auto px-[38px] pt-[100px] md:px-[26px] lg:pt-[120px] lg:pl-[80px] lg:pr-[40px]">
        <div className="flex flex-col items-start flex-1 md:flex md:flex-row md:gap-10 md:items-center lg:flex lg:flex-row lg:items-center lg:gap-x-12 lg:justify-between">
          
          {/* LEFT SIDE - TEXT */}
          <div>
            <div className="gradientText">
              <h1 className="text-white font-clashbold">
                Creative Software Engineer<span>.</span>
              </h1>
            </div>
            <p className="gradientText font-medium font-pop text-[15px] text-[#FFFFFF99] max-w-[353px] mt-[45px] md:mt-8 lg:mt-1 md:max-w-[639px] md:text-[18px] leading-md:[27px]">
              I like to craft solid and scalable products with great user experiences.
            </p>
            <div
              id="intro"
              className="text-[#F0FEFF] font-pop flex-shrink-0 text-[.9em] leading-[1.5] font-medium mt-[40px] flex flex-col gap-8 md:flex md:flex-col md:gap-[20px] md:mt-[45px] lg:flex lg:flex-row lg:items-start lg:gap-[12px]"
            >
              <p className="max-w-[310px]">
                I&#39;m George Daniel, a software engineer with over 2 years of experience.
                I specialize in building full-stack web applications, mobile apps, and robust backend systems.
              </p>
              <p className="max-w-[319px]">
                A self-taught programmer with a mission to transition complex ideas into high-performance
                live projects. Active in the tech community and a continuous learner.
              </p>
            </div>

            <div className="mt-[35px] md:mt-[65px] flex justify-start items-center gap-[26px] md:gap-[40px]">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61578554221207"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.95 }}
              >
                <FbIcon fill="#6f1cd7" className="w-[30px] h-[30px] rounded-full border-[#6f1cd7] border-solid border-[2px] p-0.5 transition-all duration-500 hover:bg-white" />
              </motion.a>

              <motion.a
                href="https://x.com/Georgedamiel_"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.95 }}
              >
                <TwIcon fill="#6f1cd7" className="w-[30px] h-[30px] rounded-full border-[#6f1cd7] border-solid border-[2px] p-1 transition-all duration-500 hover:bg-white" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/georgeabiamakadaniel2/"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.95 }}
              >
                <IgIcon fill="#6f1cd7" className="w-[30px] h-[30px] rounded-full border-[#6f1cd7] border-solid border-[2px] p-0.5 transition-all duration-500 hover:bg-white" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/george-damiel/"
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
          <div className="mt-[2.5rem] md:mt-0 flex-shrink-0">
            <div className="relative">
              {/* Purple border box (offset behind) */}
              <div className="absolute inset-0 border-[3px] border-[#6f1cd7] translate-x-3 translate-y-3 lg:translate-x-5 lg:translate-y-5" />
              
              {/* Your photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-[280px] h-[340px] lg:w-[380px] lg:h-[460px] overflow-hidden"
              >
                <Image
                  src="/images/hero.png"
                  alt="George Daniel"
                  fill
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