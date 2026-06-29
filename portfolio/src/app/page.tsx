"use client"
import {useRouter} from 'next/navigation';
import { useState} from 'react'
import Image from "next/image";
import avatar from "@/assets/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub, faLinkedinIn, faDiscord } from "@fortawesome/free-brands-svg-icons";




export default function Home() {
 const router = useRouter();
 const [isOpen, setIsOpen] = useState(false);
  

  return (
    
    <div className="flex min-h-screen flex-col ">
      <header className="flex items-center justify-between w-full bg-zinc-900 p-4 px-10">
        <h2 className="text-white text-shadow-white text-2xl font-bold "> Portfolio </h2>  
        <nav>
          <ul>
            <li>
              <button onClick={() => setIsOpen(true)} className="text-white text-2xl cursor-pointer transition hover:bg-slate-500 p-1 border-none rounded-full">
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
  <div className={`fixed inset-0 bg-zinc-950 transition-opacity duration-300 z-40 ${isOpen ? "opacity-25 visible transition duration-300" : "opacity-0 invisible transition duration-300"}`}/>
    <aside className={`fixed top-0 right-0 h-screen w-80 bg-zinc-900 text-white z-50 ease-in-out transition-transform duration-300 ${ isOpen ? "transition duration-300 translate-x-0" : "transition duration-300 translate-x-full"}`}>
      <button onClick={() => setIsOpen(false)} className=" flex m-4 cursor-pointer hover:bg-slate-500 rounded-full p-2">
        <FontAwesomeIcon icon={faArrowLeft} style={{width: '20px', height:'20px',textAlign:'center'}} />
      </button>
      <ul className='flex flex-col gap-8 m-8 border-spacing-2'>
        <li className="text-center filter text-2xl"><button className="relative pb-1 p-2 px-12 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white cursor-pointer after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100 hover:bg-slate-500 duration-300" onClick={() => router.push("/portfolio")}>Portfolio</button></li>
        <li className="text-center filter text-2xl"><button className="relative pb-1 p-2 px-12 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white cursor-pointer after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100 hover:bg-slate-500 duration-300" onClick={() => router.push("/projetos")} >Projetos</button></li>
        <li className="text-center filter text-2xl"><button className="gap-20 relative pb-1 p-2 px-12 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white cursor-pointer after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100 hover:bg-slate-500 duration-300" onClick={() => router.push("/contatos")}>Contatos</button></li>
        <li className=" text-center filter text-2xl "><button className="relative pb-1 p-2 px-12 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white cursor-pointer after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100 hover:bg-slate-500 duration-300">About me</button></li>
        {/*<li className="hover:bg-slate-600 hover:border-b-1 transition duration-300 rounded-full p-2 text-center filter text-2xl ease-in-out"><a href=""> Em desenvolvimento... </a></li>*/}
      </ul>

      
    </aside>


      

      <main className="flex flex-col relative items-center justify-center top-0 flex-1 text-center">
        <Image
          src={avatar}
          loading="eager"
          alt="Avatar"
          className="rounded-full w-48 h-48 border-2 border-gray-700 mb-6 p-4 bg-black"
        />

        <h1 className="text-4xl font-bold text-shadow-2xs">
          nito.web
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-wrap w-160">
          Meu nome é Nicolas Costa, Eu sou um amante da programação, atualmente trabalho como desenvolvedor Web, tenho experiência em construir aplicações web modernas. Sinta-se a vontade para explorar meu trabalho !
        </p>


      </main>
      <footer id='contatos' className="fixed flex bottom-0 w-full bg-zinc-900 text-white text-center p-4 px-6 ">
        <p className=" text-center ml-auto text-gray-400">
          &copy; {new Date().getFullYear()} Nicolas Costa Porfolio. All rights reserved.
        </p>
      </footer>
    </div>
    
  );
}