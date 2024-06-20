import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/aboutimg.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-6 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:flex  grid-cols-3 gap-8">
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
        <div className="col-span-2 basis-[70%] md:pt-40">
          <p className="uppercase font-bold underline text-center mt-8 text-xl tracking-widest text-[#000000]">
            About Me
          </p>
          <p className="py-2 text-gray-600 text-center">
            I am a self taught front-end developer with good practical
            experience. I have great research skills and I love solving
            technical problems. I am highly disciplined, very resourceful, love
            to work with people and a good team player.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
