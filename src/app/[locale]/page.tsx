"use client";
import { faJs, faPhp, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import Image from "next/image";
export default function HomePage() {
  const t = useTranslations("HomePage");
  const h = useTranslations("Header");
  const age = Math.floor((new Date().getTime() - new Date(2007, 10, 9).getTime()) / (1000 * 60 * 60 * 24) / 365.25);
  return (


    <div className="flex flex-col items-center font-sans gap-4 w-full h-full">
     
      <header className="w-full bg-gray-900 text-white p-4 flex items-center gap-4 border-b-4 border-blue-500">
        <img className="w-16 h-16 rounded-sm  " src="https://avatars.githubusercontent.com/u/273988618" alt="" />
        <section className="w-full bg-gray-900 text-white flex items-center gap-4">
        <h1 className="text-xl font-bold"> {`Nicolas Costa - ${h("role")} - ${age} ${h("age")}`} </h1>
        </section>
         <a href="https://github.com/nicolascosta" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faJs} size="2x"/>
         </a>
         <a href="https://github.com/nicolascosta" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faReact} size="2x"/>
         </a>
         <a href="https://github.com/nicolascosta" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faPython} size="2x"/>
         </a>
         <a href="https://github.com/nicolascosta" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faPhp} size="2x"/>
         </a>
         <a href="https://github.com/nicolascosta" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faDatabase} size="2x"/>
         
         
         
         </a>
        <section>
          <LanguageSwitcher/>
        </section>
      </header>
      <div className="max-w-3xl p-4">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <button>{t("button")}</button>
      </div>
    </div>
  );
}
