import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Profile = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="max-w-6xl mx-auto mt-10.5 border-b border-ozelgri pb-10.5">
      <h2 className="text-midnight text-5xl font-inter font-semibold text-start leading-12 mb-4">
        {t?.profileSection.title}
      </h2>
      <div className="flex gap-14">
        <div>
          <h3 className="text-indigo inline font-medium text-3xl">
            {t?.profileSection.title}
          </h3>
          {/* profil tablosu */}
          <dl className="grid grid-cols-2 gap-y-4 gap-x-4 mt-8 max-w-75">
            <dt className="font-semibold ">
              {t?.profileSection.birthdayTitle}
            </dt>
            <dd>{t?.profileSection.birthday}</dd>

            <dt className="font-semibold">{t?.profileSection.cityTitle}</dt>
            <dd>{t?.profileSection.city}</dd>

            <dt className="font-semibold">
              {t?.profileSection.educationTitle}
            </dt>
            <dd>{t?.profileSection.education}</dd>

            <dt className="font-semibold">
              {t?.profileSection.preferredPositionTitle}
            </dt>
            <dd>{t?.profileSection.preferredPosition}</dd>
          </dl>
        </div>
        <div className="max-w-xl ml-16">
          <h3 className="text-indigo font-medium text-3xl mb-[14.58px]">
            About Me
          </h3>
          <p className="text-acikgri font-normal text-lg font-inter">
            {t?.profileSection.aboutMe}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
