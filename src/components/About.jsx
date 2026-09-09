import { profileData } from "../assets/data";
import { FaCode } from "react-icons/fa";
import arjImg from "../assets/arj.jpg";

const About = () => {
  return (
    <div id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="order-1">

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-teal-800">About</span>
              <span> Me</span>
            </h2>

            <p className="text-md mb-2 leading-8">
              I'm a frontend developer with a passion for creating immersive
              digital experiences. With over 5 years in the industry, I've
              worked with startups and Fortune 500 companies to bring their
              visions to life.
            </p>

            <p className="text-md mb-2 leading-8">
              My approach combines technical expertise with creative design
              thinking to build applications that are not only functional but
              also visually stunning.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">

              {profileData.map((data, index) => (
                <div
                  key={index}
                  className="w-full sm:w-50 h-55 p-6 border border-zinc-400 rounded cursor-pointer hover:border-zinc-600 transition duration-300 hover:-translate-y-1"
                >
                  <FaCode className="text-3xl mb-4" />

                  <h1 className="text-xl font-bold mb-4">
                    {data.title}
                  </h1>

                  <p>
                    {data.technologies.join(", ")}
                  </p>
                </div>
              ))
              }
            </div>
              <button className="px-8 py-4 bg-zinc-700 text-white rounded-full cursor-pointer transition duration-300 hover:bg-zinc-900">
                Download Resume
              </button>
          </div>

          {/* Right Side Image */}
          <div className="order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={arjImg}
                  alt="Arjun profile"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;