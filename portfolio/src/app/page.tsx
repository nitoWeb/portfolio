"use client" 
import { useEffect ,useState } from 'react'

import Image from "next/image";
import avatar from "@/assets/unnamed3.png";
import goop from "@/assets/goop.jpg";
import developement from "@/assets/images.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedinIn, faDiscord, faReact, faJsSquare, faTypescript, faPython, faPhp } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from '@fortawesome/free-solid-svg-icons';




export default function Home() {
 const [isOpen] = useState(false);

 const dev = ["Desenvolvedor Web", "Desenvolvedor Front-End", "Desenvolvedor Back-End", "Desenvolvedor Full-Stack"]; // Cria array de profissões
 const [devAtual, setDevAtual] = useState(dev[0]); // Define o estado inicial como a primeira profissão do array
 const [index, setIndex] = useState(0); // Define o estado inicial do índice como 0
 useEffect(() => { // UseEffect para atualizar a profissão atual a cada 5 segundos
  const interval = setInterval(() => {
    setIndex((prevIndex) => (prevIndex + 1) % dev.length); // Atualiza o índice para a próxima profissão, voltando ao início quando chegar ao final do array
    setDevAtual(dev[index]); // Atualiza a profissão atual com base no índice atualizado
  }, 5000); // Alterar a cada 5 segundos (5000 milissegundos)

  return () => clearInterval(interval);
}, [index, dev]); 
  return (
    
    <div className="flex min-h-screen flex-col ">
      <header className="flex items-center justify-between w-full bg-transparent p-4 px-10 fixed z-50">
        <h2 className="text-white text-shadow-white text-2xl font-bold ">  </h2>  
        <nav className="flex items-center justify-center h-full">
          <ul>
          <li className=" w-full h-full bg-transparent text-white text-center p-4 px-6">
            <a href="https://www.instagram.com/nito.web/" target="_blank" rel="noopener noreferrer" className="mx-2 w-full h-full hover:text-gray-400  transition-colors duration-300">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="w-full h-full hover:text-white hover:bg-zinc-700 hover: rounded-xl p-2"  />
            </a>
            <a href="https://github.com/nitoWeb" target="_blank" rel="noopener noreferrer" className="mx-2 w-full h-full hover:text-gray-400  transition-colors duration-300">
              <FontAwesomeIcon icon={faGithub} size="2x" className="w-full h-full hover:bg-zinc-700 hover: rounded-xl p-2" />
            </a>
            <a href="https://www.linkedin.com/in/nicolas-costa-7080832b0/" target="_blank" rel="noopener noreferrer" className="mx-2 w-full h-full hover:text-gray-400  transition-colors duration-300">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="w-full h-full hover:bg-zinc-700 hover: rounded-xl p-2" />
            </a>
            <a href="https://discord.gg/vp5FTRV7jf" target="_blank" rel="noopener noreferrer" className="mx-2 w-full h-full hover:text-gray-400  transition-colors duration-300">
              <FontAwesomeIcon icon={faDiscord} size="2x" className="w-full h-full hover:bg-zinc-700 hover: rounded-xl p-2" />
            </a>
          </li>
        </ul>
        </nav>
  </header>      
  <div className={`fixed inset-0  bg-zinc-950 transition-opacity duration-300 z-40 ${isOpen ? "opacity-25 visible transition duration-300" : "opacity-0 invisible transition duration-300"}`}/>
      <div className="relative h-[100vh] min-h-[500px] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 top-90 px-6 md:px-16 ">
          <h1 className="text-4xl font-bold text-white md:text-6xl ">Bem vindos ao meu portfolio!<br/>  <p className={`p-4 text-xl ${devAtual == "Desenvolvedor Web" ? "text-red-300" : "text-blue-300" } ${devAtual == "Desenvolvedor Front-End" ? "text-yellow-300" : "text-white-300" } ${devAtual == "Desenvolvedor Full-Stack" ? "text-green-300" : "text-blue-300" }`}>Sou um {devAtual}</p>  </h1>
          <ul className="flex flex-col items-start w-full bg-transparent text-white text-center p-4 px-6 gap-12">
            <li> <a></a><FontAwesomeIcon icon={faReact} size="xl" className=" text-blue-400 w-8 h-8 hover:bg-zinc-700 hover: rounded-xl  p-2" /> <FontAwesomeIcon icon={faJsSquare} size="xl" className="text-yellow-400 w-8 h-8 hover:bg-zinc-700 hover: rounded-xl p-2" /> <FontAwesomeIcon icon={faTypescript} size="xl" className="text-blue-600 w-8 h-8 hover:bg-zinc-700 hover: rounded-xl p-2" /> <FontAwesomeIcon icon={faPython} size="xl" className="text-white-200 w-8 h-8 hover:bg-zinc-700 hover: rounded-xl p-2" /> <FontAwesomeIcon icon={faPhp} size="xl" className=" text-[#777bb3] w-8 h-8 hover:bg-zinc-700 hover: rounded-xl p-2" /> <FontAwesomeIcon icon={faDatabase} size="xl" className="text-white-400 w-8 h-8 hover:bg-zinc-700 hover: rounded-xl p-2" /> </li>
            <li className="flex gap-4">
              <a className='bg-blue-400 hover:bg-blue-600 text-white hover: cursor-pointer font-bold py-2 px-4 rounded duration-300' href="#projetos">
                Projetos
              </a>
              <a className="bg-blue-500 hover:bg-blue-700 text-white hover:cursor-pointer font-bold py-2 px-4 rounded duration-300" href="#introducao">
                Sobre mim
              </a>
            </li>
          </ul>

        </div>
      </div>
      <div>
      <main className={`fixed inset-0 bg-zinc-950 transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </main>

      <main className="flex flex-col relative items-left justify-left top-0 flex-1 text-start bg-transparent ">
        
  
        
        <ul className="flex flex-row items-left justify-left w-full bg-black text-white text-center p-4 px-6 gap-12">
        <li className=" flex flex-row  gap-8 items-left justify-left w-full bg-black-950 text-white text-center p-4 px-6">
      
      <div className="mt-10 mx-10 text-lg text-white text-wrap items-center text-justify  w-200 ">
        <h1 className="text-4xl font-bold text-shadow-2xs opacity-90 mb-10 mt-6 w-full text-left " id="introducao">Sobre Mim </h1>
         <p>Olá pessoal, meu nome é Nicolas Costa e sou <b className="text-blue-500">{devAtual}</b> focado na criação de ecossistemas digitais eficientes e intuitivos.
          Com sólida experiência no ecossistema <b className="text-blue-500">React</b>, <b className="text-blue-400">TypeScript</b> e <b className="text-blue-300">Tailwind 
            CSS</b>, desenvolvo plataformas funcionais onde design e performance andam lado a lado.</p>
          <br/> 
          <p>Trabalho no desenvolvimento web e mobile unindo tecnologia e resolução de problemas práticos. Já atuei com manutenções de sistemas 
          recorrentes utilizando <b className="text-[#777bb3]">PHP</b>, <b className="text-yellow-500">SQL</b>, <b className="text-green-300">Next.js</b> e <b className="text-blue-400">TypeScript</b>, consumindo <b>APIs</b> em JSON, integrando webhooks de pagamento e aplicando soluções de Inteligência Artificial.</p>
          <br/>
          <p>Minha trajetória traz uma bagagem diversa: além do Front-end e Back-end, tenho formação técnica em informática e experiência hands-on no desenvolvimento de circuitos eletrônicos
           e embarcados com <b className="text-cyan-500">Arduino</b> . Já desenvolvi tanto aplicações web responsivas e mobile do zero quanto atuei na otimização e manutenção de hardware e sistemas técnicos.
           </p>
           <br/>
          
           <p>Gosto de tecnologia e estou sempre em constante aprendizado — atualmente cursando Análise e Desenvolvimento de Sistemas na Faculdade Impacta. Para mim, encarar novas linguagens, 
           tecnologias ou desafios de arquitetura não é um problema; tenho facilidade de adaptação e foco total em entregar soluções funcionais e otimizadas.</p>
      </div>
        </li>

        <li className="flex flex-row gap-8 items-left justify-left w-full bg-black text-white text-center p-4 px-6">
          <Image src={avatar} alt="Avatar" height={752.4} width={752.4} style={{ borderRadius: '0.5rem', border: '2px solid #333' }} className="rounded-lg border-2 mb-6 p-4 hover:bg-zinc-800" />
        </li>  
        </ul>
      
      </main>
        <div className=" w-full bg-black text-white text-center p-4 px-6 gap-8 flex flex-col items-start justify-left">
      
          <h1 className="text-4xl font-bold mb-8 mt-10 mx-14"> Projetos  </h1>
          
          <a className='text-white'></a>
          <nav id="projetos" className="flex flex-row items-center justify-center w-full bg-black text-white text-center p-4 px-6 gap-8 " >
            <a href="https://sitegoop01.vercel.app/" target="_blank" rel="noopener noreferrer">
              <p className="text-center text-2xl"> <b className="font-bold text-green-500"> Projeto Finalizado </b> <br/> GOOP STUDIOS </p>
              <Image src={developement} alt="Projeto 2" width={400} height={400} className=" mt-6 " />
            </a>
            <a >
              <p className="text-center text-2xl"> <b className="font-bold text-red-500">Projeto em Andamento</b> <br/> Clinica Lumiere </p>
              <Image src={developement} alt="Projeto 2" width={400} height={400} className=" mt-6 " />
            </a>
            <a>
              <p className="text-center text-2xl"> <b className="font-bold text-red-500">Projeto em Andamento</b> <br/> Sistema de Gestão de Estoque</p>
              <Image src={developement} alt="Projeto 3" width={400} height={400} className=" mt-6 " />
            </a>
          </nav>
        </div>
      </div>
      
      <footer id='contatos' className=" bg-transparent flex bottom-0 w-full  text-white text-center p-4 px-6 py-6 ">
        <p className=" text-center ml-auto text-gray-400">
          &copy; {new Date().getFullYear()} Nicolas Costa Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
    
  );
}