import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";
const Header = () => {
  const { setLanguage, language, theme, setTheme } =
    useContext(LanguageContext);

  return (
    <>
      <header className=" max-w-6xl mx-auto mb-22 ">
        <div className="flex items-center justify-end pb-11 pt-8">
          {/*dark theme button*/}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`
        w-12 h-6 flex items-center rounded-full p-1
        transition-colors duration-300
        ${theme === "dark" ? "bg-indigo-600" : "bg-gray-300"}
      `}
          >
            <span
              className={`
          w-4 h-4 bg-[#FFE86E] rounded-full shadow
          transform transition-transform duration-300 cursor-pointer
          ${theme === "dark" ? "translate-x-6" : "translate-x-0"}
        `}
            />
          </button>

          {/*Language button*/}

          <button
            onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
            className="px-4 py-2 cursor-pointer"
          >
            {language !== "tr" ? "Türkçe'ye Geç" : "English"}
          </button>
        </div>

        <div className="flex place-content-between items-center">
          <Link to="/">
            <h1 className="rotate-30 p-8 rounded-4xl bg-profilmavisi w-8 h-8 flex justify-center items-center text-acikindigo font-bold text-2xl">
              A
            </h1>
          </Link>
          <div className="flex place-content-between  gap-20  text-acikgri font-inter font-medium text-lg ">
            <Link
              to="/skills"
              className="
    px-8 py-3
    border border-transparent
    rounded-md
    transition-colors duration-200
    hover:text-acikindigo
    hover:border-acikindigo
  "
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="
    px-8 py-3
    border border-transparent
    rounded-md
    transition-colors duration-200
    hover:text-acikindigo
    hover:border-acikindigo
  "
            >
              Projects
            </Link>

            <Link
              to="/hireme"
              className="
    px-8 py-3
    border border-transparent
    rounded-md
    transition-colors duration-200
    hover:text-acikindigo
    hover:border-acikindigo
  "
            >
              Hire me
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
