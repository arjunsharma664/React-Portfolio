import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <span className="uppercase text-2xl font-bold">
              The-Arjun
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-6">

            {/* Twitter / X */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-black transition"
            >
              <FaXTwitter size={22} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-black transition"
            >
              <FaGithub size={22} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-black transition"
            >
              <FaLinkedin size={22} />
            </a>

          </div>
            <div className="text-zinc-900 text-sm">
                @ 2025 The-Arjun Developer, All rights reserved.
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;