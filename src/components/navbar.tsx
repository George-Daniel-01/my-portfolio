'use client'
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import { socialLinks } from "../data/data";

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
    const { isLoaded, isSignedIn } = useUser();

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

            <div className="flex items-center gap-3 md:gap-5">
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
              {!isLoaded ? (
                <span
                  className="w-8 h-8 rounded-full bg-[#ffffff15] animate-pulse"
                  aria-hidden
                />
              ) : isSignedIn ? (
                <div className="flex items-center">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: 'w-8 h-8',
                      },
                    }}
                  />
                </div>
              ) : (
                <Link
                  href="/sign-in"
                  className="inline-flex items-center px-4 py-2 bg-[#6f1cd7] text-white text-sm font-medium rounded hover:bg-[#5a16b0] transition-colors"
                >
                  Sign In
                </Link>
              )}
            </div>
          </nav>
        </header>
    );
};

export default Navbar;