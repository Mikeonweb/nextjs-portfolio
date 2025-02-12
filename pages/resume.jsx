import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Michael | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-6 pt-[120px]">
        <div className="flex justify-center items-center gap-4">
          <h2 className="text-center">Resume</h2>
          <a
            className="underline"
            target="_blank"
            href="https://drive.google.com/file/d/1xy9TfBQswOlV5Ygz6sRs6s9bkn4p3FOn/view"
          >
            view full CV in PDF
          </a>
        </div>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center rounded-xl">
          <h2 className="text-center">Michael Sunday</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/michael-sunday-18b5a4267/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Mikeonweb"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Problem Solving</p>
          </div>
        </div>
    

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Bootstrap
            <span className="px-2">|</span> RESTAPI
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Cyan Technology</span>
            {/* <span className="px-2">|</span>Lagos , Nigeria */}
          </p>
          <p className="py-1 italic">
            Front End Web Developer (January - October 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Developed responsive and dynamic landing pages using React.js.</li>
            <li>
              Maintained brand consistency and pixel-perfect design across product interfaces.
            </li>
            <li>
              Debugged and optimized code to enhance performance and functionality.
            </li>
            <li>
              Refactored HTML structures to improve SEO and accessibility compliance.
            </li>
          </ul>
        </div>

        
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Seal World</span>
            {/* <span className="px-2">|</span>Lagos, Nigeria */}
          </p>
          <p className="py-1 italic">
            Front End Web Developer (December - November 2024)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
             Conducted a comprehensive front-end development training for 50 students, covering HTML, CSS, and JavaScript.
            </li>
            <li>
              Mentored and guided three team members to enhance their technical and professional growth.
            </li>
            <li>
              Collaborated with a team to build a fully functional e-commerce website, designing and implementing the user
interface using React.js.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
