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