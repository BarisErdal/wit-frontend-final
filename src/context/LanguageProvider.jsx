import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import axios from "axios";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "tr"
  );
  const [translations, setTranslations] = useState({});
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    axios.get("/data.json").then((response) => {
      setTranslations(response.data);
    });
  }, [language]);

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
