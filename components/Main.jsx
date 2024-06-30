import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiUser2Fill } from "react-icons/ri";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            😊 Thank you for checking me out 😊
          </p>
          <h1 className="py-4 text-gray-700">Hello! I&#39;m</h1>
          <div className="sign">
            <h1 className="py-4">
              <span className="fast-flicker">M</span>ichael
              <span className="flicker"> S</span>unday
            </h1>
          </div>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I transform your visions into compelling websites for enhanced
            online presence to power up your business for more visibility and
            increase sales with a modern and user-friendly user interface that
            suits your brand.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/michael-sunday-18b5a4267"
              target="_blank"
              rel="noreferrer"
              className="relative group"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
              <p className="absolute ml-1 my-4 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                LinkedIn
              </p>
            </a>
            <a
              href="https://github.com/Mikeonweb"
              target="_blank"
              rel="noreferrer"
              className="relative group"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
              <p className="absolute ml-2 my-4 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                Github
              </p>
            </a>
            {/* <Link href="mailto:michael.sun14@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link> */}
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <h3 className="flex items-center">
                  <RiUser2Fill className="text-xl" />
                  Resume
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
