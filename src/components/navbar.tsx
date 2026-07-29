'use client'
import Link from "next/link";
import { socialLinks } from "../data/data";

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
    return (
        <header className="fixed z-40 top-0 bg-[#0b040c]/90 backdrop-blur-md w-full py-4 px-[32px] lg:px-[80px]">
          <nav className="flex items-center justify-between">
            <Link href="/" className="font-clashbold font-semibold text-[18px] md:text-[25px] text-white">
              Daniel<span>!</span><span>⚡</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#FFFFFF99] hover:text-white text-sm font-medium transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-green-500/15 text-green-400 border border-green-500/30 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to Work
            </span>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#FFFFFF99] hover:text-white text-sm font-medium transition-colors duration-300"
            >
              GitHub
            </a>
          </nav>
        </header>
    );
};

export default Navbar;