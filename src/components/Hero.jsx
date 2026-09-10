import { FaArrowRight } from "react-icons/fa";
import arjImg from "../assets/arj.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-[calc(100vh-80px)] flex items-center pt-12"
    >
      <div className="max-w-7xl mx-auto px-6 py-8 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8">

              <span className="block text-zinc-700">
                Junior
              </span>

              <span className="block text-zinc-700">
                FullStack
              </span>

              <span className="block text-cyan-700">
                Developer
              </span>

            </h1>

            <p className="text-lg lg:text-xl text-zinc-900 mb-8 max-w-xl">
              I craft immersive web experience at the intersection
              of design and technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">

              <a
                href="#work"
                className="flex gap-3 items-center justify-center px-8 py-3.5 bg-black text-white rounded-full hover:bg-zinc-800 transition duration-300"
              >
                View My Work
                <FaArrowRight />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center px-8 py-3.5 border border-slate-400 rounded-full hover:border-slate-800 transition duration-300"
              >
                Contact Me
              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end">

            <div
              className="relative w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] floating"
            >

              <div
                className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 glow"
              >
                <img
                  src={arjImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
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