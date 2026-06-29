"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faGithub,faDiscord, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation"
export default function contatos(){
    const router = useRouter();
   
    
    return(

       


        <div className='w-full h-160'>
            <button onClick={() => router.push('/') } className="m-3"><FontAwesomeIcon className="hover:bg-zinc-500 p-2 transition-all duration-300 ease-out cursor-pointer" icon={faArrowLeft} style={{color:'white', height:'40px', width:'40px'}}/></button>
            <ul className="flex h-200 justify-center items-center gap-20 ">
                <li  className="flex items-center space-x-4">
                    <a href="https://www.instagram.com/nito.web" className="text-blue-400 transition-all duration-300 hover:bg-zinc-500 hover:rounded-2xl p-4" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon id={`item-1`} icon={faInstagram} style={{ color: 'white', height: '130px', width:'120px' }} className="text-white text-xl" />
                    </a>
                </li>
                <li className="flex items-center space-x-4">
                    <a href="https://github.com/nitoWeb" className="text-slate-400 transition-all duration-300 hover:bg-zinc-500 hover:rounded-2xl p-4" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{ color: 'white', height: '130px', width:'120px' }} className="text-white text-xl" />
                    </a>
                </li>
                <li className="flex items-center space-x-4">
                    <a href="https://www.linkedin.com/in/nicolas-costa-7080832b0/" className="text-blue-400 transition-all duration-300 hover:bg-zinc-500 hover:rounded-2xl p-4" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} style={{ color: 'white', height: '130px', width:'120px' }} className="text-white text-xl" />
                    </a>
                </li>
                <li className="flex items-center space-x-4">
                    <a href="https://discord.com/users/526434220315246621" className="text-blue-400 transition-all duration-300 hover:bg-zinc-500 hover:rounded-2xl p-4" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faDiscord} style={{ color: 'blue', height: '130px', width:'120px' }} className="text-white text-xl" />
                    </a>
                </li>

          
            </ul>
        </div>
    )
}