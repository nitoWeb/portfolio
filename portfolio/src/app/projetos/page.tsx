"use client"
import {useRouter} from 'next/navigation';
import { useState} from 'react'
import goop from "@/assets/goop.jpg"
import Image from "next/image";
import avatar from "@/assets/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub, faLinkedinIn, faDiscord } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';



export default function Projetos() {
 const router = useRouter();
 const [isOpen, setIsOpen] = useState(false);
  return (
    
    <div className="flex min-h-screen flex-col ">
      <header className="flex items-center justify-between w-full bg-zinc-900 p-4 px-10">
        <h2 className="text-white text-shadow-white text-2xl font-bold "> Projetos </h2>  
              <nav>
              <ul>
              <li>
              <button onClick={() => setIsOpen(true)} className="text-white text-2xl cursor-pointer transition hover:bg-slate-500 p-1 border-none rounded-full">
              <FontAwesomeIcon icon={faBars} style={{ color: 'white', height: '20px' }} className="text-white text-2xl"/>
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
        <li className="text-center filter text-2xl"><button className="relative pb-1 p-2 px-12 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white cursor-pointer after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100" onClick={() => router.push("/portfolio")}>Portfolio</button></li>
        <li className="text-center filter text-2xl"><button className="relative pb-1 p-2 px-12 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white cursor-pointer after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100" onClick={() => router.push("/projetos")} >Projetos</button></li>
        <li className="text-center filter text-2xl"><button className="gap-20 relative pb-1 p-2 px-12 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white cursor-pointer after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100" onClick={() => router.push("/contatos")}>Contatos</button></li>
        <li className=" text-center filter text-2xl "><button className="relative pb-1 p-2 px-12 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white cursor-pointer after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100">About me</button></li>
        {/*<li className="hover:bg-slate-600 hover:border-b-1 transition duration-300 rounded-full p-2 text-center filter text-2xl ease-in-out"><a href=""> Em desenvolvimento... </a></li>*/}
      </ul>
    </aside>
      <main id='projetos' className='h-400 m-6 flex flex-row flex-wrap'>
        <ul className='flex gap-8 '>
          <li className='flex flex-col gap-8 bg-zinc-950 text-xl h-80 rounded-2xl p-4 items-center cursor-pointer '><button>Loja Online de Roupas - Goop Studios</button> <nav className='flex gap-8'> <Image src={goop} alt="goop" className='w-45 rounded-2xl border-2 border-zinc-600' />  </nav>  </li>
          <li className='bg-zinc-800 text-xl h-80 rounded-2xl p-2 cursor-pointer'><button>Loja Online de Roupas - Goop Studios</button>    </li>
       </ul>
      </main>
      <footer id='contatos' className="fixed bottom-0 w-full bg-zinc-900 text-white p-4 px-6 items-right text-right">
       <p className=" text-gray-400"> &copy; {new Date().getFullYear()} Nicolas Costa Porfolio. All rights reserved.</p>
      </footer>
    </div>
    
  );
}