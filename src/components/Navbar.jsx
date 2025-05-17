import { useEffect } from "react";
import{FaGithub} from "react-icons/fa";
import {FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
<div className="flex justify-between items-center h-16">

  <div className="flex items-center space-x-5">
    <a
      href="https://github.com/Soumyaranjan-2005"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
    >
      <FaGithub className="mr-1" size={24} />
      <span className="sr-only">GitHub</span>
    </a>
    <a
      href="www.linkedin.com/in/soumya-ranjan-mahanna-1a2954309"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition-colors flex items-center"
    >
      <FaLinkedin className="mr-1" size={24} />
      <span className="sr-only">LinkedIn</span>
    </a>
    <a
      href="https://x.com/srm_soumya701?t=haZ2dZNT--6aliZrMvsTWA&s=09"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
    >
      <FaTwitter className="mr-1" size={24} />
      <span className="sr-only">Twitter</span>
    </a>
    <a
      href="https://www.instagram.com/soumyaranjanx?igsh=MWIzcmJzdGgxMjBkbA=="
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
    >
      <FaInstagram className="mr-1" size={24} />
      <span className="sr-only">Instagram</span>
    </a>
  </div>

  <div className="hidden md:flex items-center space-x-8">
    <a
      href="#home"
      className="text-gray-300 hover:text-blue-500 transition-colors"
    >
      Home
    </a>
    <a
      href="#about"
      className="text-gray-300 hover:text-blue-500 transition-colors"
    >
      About
    </a>
    <a
      href="#projects"
      className="text-gray-300 hover:text-blue-500 transition-colors"
    >
      Projects
    </a>
    <a
      href="#contact"
      className="text-gray-300 hover:text-blue-500 transition-colors"
    >
      Contact
    </a>
  </div>
</div>
</div>

    </nav>
  );
};
