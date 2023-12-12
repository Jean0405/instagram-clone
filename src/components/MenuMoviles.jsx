import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

function MenuMoviles() {
  return(
    <div className="w-screen flex justify-around items-center bg-gray-200 p-2">
      <Link to="/" className='hover:bg-gray-200 rounded-lg p-2'><FontAwesomeIcon icon={faHouse} className="text-xl"/> <span className='hidden lg:inline-block pl-1'>Home</span></Link>
      <Link to="/" className='hover:bg-gray-200 rounded-lg p-2'><FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl"/> <span className='hidden lg:inline-block pl-1'>Search</span></Link>
      <Link to="/" className='hover:bg-gray-200 rounded-lg p-2'><FontAwesomeIcon icon={faClapperboard} className="text-xl"/> <span className='hidden lg:inline-block pl-1'>Reels</span></Link>
      <Link to="/" className='hover:bg-gray-200 rounded-lg p-2'><FontAwesomeIcon icon={faMessage} className="text-xl"/> <span className='hidden lg:inline-block pl-1'>Messages</span></Link>
      <div className="cursor-pointer flex items-center rounded-md hover:bg-gray-200 p-1.5">
        <img className="w-10 h-10 object-cover object-center rounded-full" src="https://s1.eestatic.com/2023/01/27/el-cultural/letras/736936743_230463296_1706x960.jpg" alt="" />
      </div>
    </div>
  )
}
export default MenuMoviles