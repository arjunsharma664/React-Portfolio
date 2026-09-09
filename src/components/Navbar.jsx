import { navMenu } from "../assets/data.js";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full py-4 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="text-2xl font-bold text-zinc-800">
            <span>THE-</span>
            <span className="text-teal-800 font-orbitron">
              ARJUN
            </span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex gap-x-8 border border-gray-200 rounded-full px-10 py-4">
            {navMenu.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-lg hover:text-teal-700 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-zinc-800 rounded-full flex items-center gap-2 text-slate-500 hover:bg-zinc-900 hover:text-white transition-all"
          >
            Resume
            <FaArrowRight className="text-sm" />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Navbar;