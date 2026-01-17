import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import axios from "axios";
//import data from "../../public/data.json";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "tr"
  );
  const [translations, setTranslations] = useState({});
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    axios
      .get("../../public/data.json")
      .then((response) => {
        setTranslations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching translations:", error);
      });
  }, []);
  /*
  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", data, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres_20ce181443d94730803e44c21e6c1882",
        },
      })
      .then((response) => {
        setTranslations(response.data);
      })
      .catch((error) => {
        console.error("Error :", error);
      });
  }, []);

  */

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const value = {
    language,
    setLanguage,
    theme,
    setTheme,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
