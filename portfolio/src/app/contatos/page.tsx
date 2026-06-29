import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faGithub,faDiscord, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
export default function contatos(){
    return(
        <div className='w-full h-full'>
          <ul >
          <li className="flex items-center space-x-4">
          <a href="https://www.instagram.com/nito.web" className="text-blue-400" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', height: '36px' }} className="text-white text-xl" />
          </a>
          <a href="https://github.com/nitoWeb" className="text-slate-400" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={{ color: 'white', height: '36px' }} className="text-white text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/nicolas-costa-7080832b0/" className="text-blue-400" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} style={{ color: 'white', height: '36px' }} className="text-white text-xl" />
          </a>
          <a href="https://discord.com/users/526434220315246621" className="text-blue-400" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} style={{ color: 'white', height: '36px' }} className="text-white text-xl" />
          </a>
          </li>
        </ul>
        </div>
    )
}