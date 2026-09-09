import { FaArrowRight } from "react-icons/fa";
import arjImg from "../assets/arj.jpg";
const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-start pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-10">
              <span className="text-zinc-700">
                Junior FullStack
              </span>
              <br />
              <span className="text-cyan-700 capitalize">
                Developer
              </span>
            </h1>

            <p className="text-xl text-zinc-900 mb-6">
              I craft immersive web experience at the intersection
              of design and technology.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4">

              {/* View My Work */}
              <a   href="#work  " className="flex gap-2 items-center px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white cursor-pointer">
                View My Work
                <FaArrowRight />
              </a>

              {/* Contact Me */}
              <a   href="#contact" className="flex items-center gap-2 border border-slate-400 rounded-full px-10 py-4 hover:border-slate-800 transition duration-300 cursor-pointer">
                Contact Me
              </a>

            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 floating">
              
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 glow">
                <img
                  className="w-full h-full object-cover"
                  src={arjImg}
                  alt="Profile"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;