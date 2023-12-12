import Aside from "../components/Aside"
import MenuMoviles from "../components/MenuMoviles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  return(
    <>
    <div className="grid grid-cols-6 lg:grid-cols-6">
      <div className="hidden md:block sticky w-full top-0 h-screen">{<Aside/>}</div>
      <div className="col-span-6 md:col-span-5 lg:col-span-5 px-5">
        <div className="m-5">
          <div className="bg-gray-100 hover:bg-blue-200 flex flex-col sm:flex-row justify-center items-center gap-5 p-5 cursor-pointer rounded-md">
            <img className="w-40 h-40 object-cover object-center rounded-full" src="https://s1.eestatic.com/2023/01/27/el-cultural/letras/736936743_230463296_1706x960.jpg" alt="" />
            <div className="grid gap-3">
              <p className="font-bold text-2xl">Jeff_BezosAWS</p>
              <div className="flex gap-5">
                <span className="font-bold">1 post</span>
                <span className="font-bold">101 follower</span>
                <span className="font-bold">200 followed</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, eius.</p>
            </div>
          </div>
        </div>
        {/* POSTS */}
        <h1 className="bg-black w-80 text-white text-center font-bold p-3 m-auto rounded-md"><span className="mx-2"><FontAwesomeIcon icon={faImage} /></span>PUBLICATIONS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-3 p-5">
          <img className="bg-blue-500 w-80 h-80 object-cover object-center rounded-md cursor-pointer" src="https://s1.eestatic.com/2023/01/27/el-cultural/letras/736936743_230463296_1706x960.jpg"/>
          <img className="bg-blue-500 w-80 h-80 object-cover object-center rounded-md cursor-pointer" src="https://s1.eestatic.com/2023/01/27/el-cultural/letras/736936743_230463296_1706x960.jpg"/>
          <img className="bg-blue-500 w-80 h-80 object-cover object-center rounded-md cursor-pointer" src="https://s1.eestatic.com/2023/01/27/el-cultural/letras/736936743_230463296_1706x960.jpg"/>
          <img className="bg-blue-500 w-80 h-80 object-cover object-center rounded-md cursor-pointer" src="https://s1.eestatic.com/2023/01/27/el-cultural/letras/736936743_230463296_1706x960.jpg"/>
          <img className="bg-blue-500 w-80 h-80 object-cover object-center rounded-md cursor-pointer" src="https://s1.eestatic.com/2023/01/27/el-cultural/letras/736936743_230463296_1706x960.jpg"/>
          <img className="bg-blue-500 w-80 h-80 object-cover object-center rounded-md cursor-pointer" src="https://s1.eestatic.com/2023/01/27/el-cultural/letras/736936743_230463296_1706x960.jpg"/>
        </div>
      </div>
    </div>
    <div className="md:hidden fixed bottom-0">{<MenuMoviles/>}</div>
    </>
  )
}

export default Profile