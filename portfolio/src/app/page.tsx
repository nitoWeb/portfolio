import Image from "next/image";
import avatar from "@/assets/avatar.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub, faLinkedinIn, faDiscord } from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between rounded-xl w-full bg-slate-800 p-4 px-10">
        <h2 className="text-white text-2xl font-bold drop-shadow-xl">My Portfolio</h2>  
        <nav>
          <ul>
            <li>
              <button className="text-white text-2xl cursor-pointer">
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: 'white', height: '20px' }}
                className="text-white text-2xl"
              />
              </button>
            </li>
          </ul>
          
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <Image
          src={avatar}
          loading="eager"
          alt="Avatar"
          className="rounded-full w-48 h-48 border-2 border-gray-700 mb-6"
        />

        <h1 className="text-4xl font-bold">
          Welcome to My Portfolio
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          My name is Nicolas, I'm a passionate web developer with experience in building modern web applications. Feel free to explore my work and get in touch!
        </p>


      </main>
      <section className="flex bg-slate-800 text-white p-4 items-center text-center">
        <ul>
          <li className="flex items-center space-x-4">
          <a href="https://www.instagram.com/nito.web" className="text-blue-400" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', height: '40px' }} className="text-white text-xl" />
          </a>
          <a href="https://github.com/nitoWeb" className="text-blue-400" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={{ color: 'white', height: '40px' }} className="text-white text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/nicolas-costa-7080832b0/" className="text-blue-400" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} style={{ color: 'white', height: '40px' }} className="text-white text-xl" />
          </a>
          <a href="https://discord.com/users/1051870911559050240" className="text-blue-400" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} style={{ color: 'white', height: '40px' }} className="text-white text-xl" />
          </a>
          </li>
        </ul>
        <p className=" text-center ml-auto text-gray-400">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </section>
    </div>
  );
}