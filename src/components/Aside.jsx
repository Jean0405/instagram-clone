import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Aside() {
  return ( 
    <div className="w-16 lg:w-full h-screen bg-gray-100">
      <div className='pl-4 py-5'>
        <img className='hidden lg:inline-block w-24' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" alt="" />
        <img className='inline-block lg:hidden w-8' src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="instagram-new--v1"/>
      </div>
      <div className='flex flex-col gap-2 px-4'>
          <Link to="/home" className='hover:bg-gray-200 rounded-lg p-2'><FontAwesomeIcon icon={faHouse}/> <span className='hidden lg:inline-block pl-1'>Home</span></Link>
          <Link to="/" className='hover:bg-gray-200 rounded-lg p-2'><FontAwesomeIcon icon={faMagnifyingGlass}/> <span className='hidden lg:inline-block pl-1'>Search</span></Link>
          <Link to="/" className='hover:bg-gray-200 rounded-lg p-2'><FontAwesomeIcon icon={faCompass} /> <span className='hidden lg:inline-block pl-1'>Explore</span></Link>
          <Link to="/" className='hover:bg-gray-200 rounded-lg p-2'><FontAwesomeIcon icon={faMessage}/> <span className='hidden lg:inline-block pl-1'>Messages</span></Link>
          <Link to="/" className='hover:bg-gray-200 rounded-lg p-2'><FontAwesomeIcon icon={faHeart} /> <span className='hidden lg:inline-block pl-1'>Notifications</span></Link>
          <Link to="/" className='hover:bg-gray-200 rounded-lg p-2'><FontAwesomeIcon icon={faSquarePlus}/> <span className='hidden lg:inline-block pl-1'>Create</span></Link>
          <Link to="/profile" className='hover:bg-gray-200 rounded-lg p-2'><FontAwesomeIcon icon={faUser}/> <span className='hidden lg:inline-block pl-1'>Profile</span></Link>
      </div>
      <div className='absolute flex flex-col gap-2 px-4 bottom-5'>
          {/* <Link to="/"><FontAwesomeIcon icon={faThreads} style={{color: "#000000",}} /> Home</Link> */}
          <Link to="/" className='rounded-lg p-2'><FontAwesomeIcon icon={faBars} style={{color: "#000000",}} /> <span className='hidden lg:inline-block pl-1'>More</span></Link>
      </div>
    </div>
  )
}

export default Aside
