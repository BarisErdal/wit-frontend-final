import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Hero = () => {
  const { t } = useContext(LanguageContext);

  /*
   const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("/data.json").then((response) => {
      console.log(response.data.en.heroSection.name);
      setData(response.data);
    });
  }, []);
 */
  return (
    <section className="flex mx-auto max-w-6xl place-content-between">
      <div className="">
        <p className="text-indigo font-medium text-xl font-inter mb-10">
          {"------" + t?.heroSection.name + " " + t?.heroSection.surname}
        </p>
        <h1 className="text-midnight text-7xl font-inter font-bold max-w-149 ">
          {t?.heroSection.intro}
        </h1>
        <p className="text-acikgri text-lg font-inter font-normal max-w-138.25 my-10">
          {t?.heroSection.ctaHTML}
        </p>

        <div className="flex gap-4">
          <Link
            to="/hireme"
            className="border border-acikindigo rounded-md py-3 w-31.75 h-13 text-center text-acikindigo font-inter font-medium hover:bg-acikindigo hover:text-white"
          >
            Hire Me
          </Link>
          <a
            href={t?.heroSection.socials[1].link}
            className="flex border border-acikindigo rounded-md py-3 w-31.75 h-13  text-acikindigo font-inter font-medium"
          >
            <img
              src="../public/github.png"
              className="w-6 text-acikindigo ml-3 mr-2.5"
            />
            Github
          </a>
          <a
            href={t?.heroSection.socials[0].link}
            className="flex border border-acikindigo rounded-md py-3 w-31.75 h-13  text-acikindigo font-inter font-medium"
          >
            <img
              src="../public/LinkedIn.png"
              className="w-6  h-6 ml-3 mr-2.5"
            />
            LinkedIn
          </a>
        </div>
      </div>
      <img
        className="max-w-md  rounded-[18px] object-cover"
        src="../public/hero-img.png"
        alt=""
      />
    </section>
  );
};

export default Hero;
