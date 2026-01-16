import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="bg-[#F9F9F9] min-h-102.25">
      <div className="max-w-6xl mx-auto pt-21.25">
        <h2 className="text-midnight font-inter text-[42px] font-semibold max-w-135 ">
          {t?.footerSection.text}
        </h2>
        <div className="flex place-content-between mt-15.25">
          <p className="text-[#AF0C48] ">
            👉
            <span className="underline underline-offset-4">
              {t?.footerSection.email}
            </span>
          </p>
          <div className="flex gap-5 ">
            {t?.footerSection.links.map((link, index) => (
              <a
                className="nth-2:text-[#00AB6B] text-lg font-inter  nth-3:text-[#0077B5]"
                key={index}
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
