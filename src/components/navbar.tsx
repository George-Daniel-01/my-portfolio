'use client'
import clsx from "clsx";
import { GhIcon } from "./svgs";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    
    return (
        <>
            <main className="">
                <header
                    className={clsx(
                        "fixed z-40 top-0 md:relative bg-[#0b040c]/90 pb-3 w-full pt-[20px] px-[32px] md:py-[30px] lg:px-[80px]"
                    )}
                >
                    <nav className="flex items-center justify-between">
                        <Link href="/">
                            <div
                                className={`before:content-[''] font-clashbold font-semibold text-[18px] md:text-[25px] active:scale-[0.86] transition-all duration-100 before:absolute before:h-1 before:-bottom-1 before:transition-all before:duration-300 ${pathname === '/' ? "text-white hover:before:w-full" : "text-white hover:before:w-full"} relative`}
                            >
                                Daniel<span>!</span>
                                <span>⚡</span>
                            </div>
                        </Link>
                        
                        <div className="group transition-all duration-300">
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/George-Daniel-01"
                                className="transition-colors duration-300"
                            >
                                <span className="flex items-center gap-[8px] md:gap-[10px]">
                                    <GhIcon className="opacity-60 w-[26px] h-[26px] md:w-[32px] md:h-[32px] transition-opacity duration-300 group-hover:opacity-100" />
                                    <p className="font-clash text-[15px] md:text-[18px] font-medium text-[#FFFFFF99] group-hover:text-white transition-colors duration-300">
                                        github
                                    </p>
                                </span>
                            </Link>
                        </div>
                    </nav>
                </header>
            </main>
        </>
    );
};

export default Navbar;