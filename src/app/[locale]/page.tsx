import { faJs, faPhp, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import Image from "next/image";
const languages = [
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "Python", icon: "/python.svg" },
  { name: "Java", icon: "/java.svg" },
  { name: "SQL", icon: "/sql.svg" }
];


export default function HomePage() {
  const t = useTranslations("HomePage");
  return (


    <div className="flex flex-col items-center bg-zinc-50 font-sans dark:bg-black gap-4 ">
     
      <header className="w-full bg-gray-900 text-white p-4 flex items-center gap-4">
        <section className="w-full bg-gray-900 text-white flex items-center gap-4">
        <img className="w-16 h-16 rounded-sm  " src="https://avatars.githubusercontent.com/u/273988618" alt="" />
        <h1 className="text-xl font-bold"> {`Nicolas Costa - Developer - ${Math.floor((new Date().getTime() - new Date(2007, 10, 9).getTime()) / (1000 * 60 * 60 * 24) / 365.25)} anos`} </h1>
        </section>
         <p><FontAwesomeIcon icon={faJs}/></p>
         <p><FontAwesomeIcon icon={faReact}/></p>
         <p><FontAwesomeIcon icon={faPython}/></p>
         <p><FontAwesomeIcon icon={faPhp}/></p>
         <p><FontAwesomeIcon icon={faDatabase}/></p>
        <section>
          <LanguageSwitcher />
        </section>
      </header>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <button>{t("button")}</button>
    </div>
  );
}
