import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import video from "../assets/videos/project.mp4";
import clarifaiProjectImage from "../assets/clarifai-website.jpg";

const ProjectCard = ({
  isVideo,
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link,
  digital,
}) => {
  const [isPaused, setIsPaused] = useState(true);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handlePlay = () => {
    setIsPaused(false);
  };

  const navigateToSourceCode = () => {
    window.location.href = source_code_link;
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          {isVideo ? (
            <>
              {isPaused && (
                <img
                  style={{
                    position: "absolute",
                    borderRadius: "12px",
                    height: "100%",
                    width: "100%",
                  }}
                  src={clarifaiProjectImage}
                  alt="clarifai"
                />
              )}
              <video
                style={{ width: "100%", height: "100%", borderRadius: "12px" }}
                onPause={handlePause}
                onPlay={handlePlay}
                poster={clarifaiProjectImage}
                controls
              >
                <source src={video} type="video/mp4" />
              </video>
            </>
          ) : (
            <img
              src={image}
              alt="project_image"
              className={`w-full h-full rounded-2xl ${digital ? 'bg-cover bg-center' : 'object-cover'}`}
            />
          )}
          {!isVideo && (
            <div
              onClick={navigateToSourceCode}
              className=" absolute top-0 right-0 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description}
            {isVideo ? (
              <>
                <a
                  href="https://github.com/aminbayat3/Clarifai-frontend"
                  className={`${styles.aTags}`}
                  target="_blank"
                >
                  frontend
                </a>
                <a
                  href="https://github.com/aminbayat3/Clarifai-backend"
                  className={`${styles.aTags}`}
                  target="_blank"
                >
                  backend
                </a>
              </>
            ) : (
              <a href={link} className={`${styles.aTags}`} target="_blank">
                {name}
              </a>
            )}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The presented projects demonstrate my skills and experience through
          practical examples of my work. Each project is briefly described and
          includes links to live demos, showcasing my ability to effectively
          manage projects, work with various technologies, and solve intricate
          problems.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
