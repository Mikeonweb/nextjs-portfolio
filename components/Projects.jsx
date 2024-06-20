import React from "react";
import dictionaryImg from "../public/assets/projects/dictionary.png";
import chownowImg from "../public/assets/projects/chownow.png";
import beautycareImg from "../public/assets/projects/beautycare.png";
import text2speechImg from "../public/assets/projects/text2speech.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-6">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl font-bold underline py-4 text-center tracking-widest uppercase text-[#000000]">
          Projects
        </p>
        {/* <h2 className="py-4 text-center">What I&apos;ve Built</h2> */}
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Dictionary"
            backgroundImg={dictionaryImg}
            projectUrl="/dictionary"
            tech="Vanilla Javascript"
          />
          <ProjectItem
            title="Chow Now"
            backgroundImg={chownowImg}
            projectUrl="/chownow"
            tech="React JS"
          />
          <ProjectItem
            title="Beauty Care"
            backgroundImg={beautycareImg}
            projectUrl="/beautycare"
            tech="React JS"
          />
          <ProjectItem
            title="Text To Speech"
            backgroundImg={text2speechImg}
            projectUrl="/texttospeech"
            tech="Vanilla Javascript"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
