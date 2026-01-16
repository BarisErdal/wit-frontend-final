import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
const Projects = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="max-w-6xl mx-auto  border-b pb-10.5 border-ozelgri ">
      <h2 className="text-5xl font-inter font-semibold text-midnight my-9">
        {t?.projectsSection.title}{" "}
      </h2>
      <ul className="flex gap-30">
        {t?.projectsSection.projects.map((project, index) => (
          <li key={index}>
            <h3 className="text-indigo font-medium text-3xl mb-[14.58px]">
              {project.name}
            </h3>
            <img src={project.imgLink} alt={project.name} />
            <p>{project.description}</p>

            <div className="flex gap-1.5 my-4.25">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 border rounded-sm border-acikindigo text-acikindigo text-sm font-medium px-2.25 py-0.75 font-inter"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex place-content-between ">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-inter underline font-semibold text-acikindigo underline-offset-4"
              >
                GitHub
              </a>
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-inter underline font-semibold text-acikindigo underline-offset-4"
              >
                Website
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
