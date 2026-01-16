import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Skills = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="max-w-6xl mx-auto mt-10.5 ">
      <h2 className="text-midnight text-5xl font-inter font-semibold text-start leading-12 mb-4">
        {t?.skillsSection.title}
      </h2>

      <div
        className="flex place-content-between pb-10.5 border-b border-ozelgri
      "
      >
        {t?.skillsSection.skills.map((skill, index) => (
          <div key={index} className="">
            <h3 className="text-indigo font-medium text-3xl">{skill.name}</h3>
            <p className="text-acikgri text-xs font-normal max-w-75">
              {skill.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
