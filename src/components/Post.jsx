import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

function Post() {
  const [isRed, setIsRed] = useState(false);

  const cambiarColorIcono = () => {
    setIsRed(!isRed);
  };

  return(
    <>
      <div className="grid gap-2 p-5 bg-white">
      <div className="flex gap-2 justify-start items-center">
        <img className="bg-black w-10 h-10 rounded-full" src="https://static-00.iconduck.com/assets.00/aws-icon-2048x2048-ptyrjxdo.png" alt="" />
        <span className="text-sm font-bold">amazonwebservices</span>
        <div className='flex gap-2 justify-start items-center'>
          <span className='rounded-full w-1 h-1 bg-gray-400 bottom-2 left-1'></span>
          <span className='text-gray-400 text-sm'>1 day</span>
        </div>
      </div>
      <div className="border rounded-md">
        <img className="h-full w-full rounded-md" src="https://images.adsttc.com/media/images/5d16/10e1/284d/d168/6000/0108/newsletter/06_101065_03_Spheres_N8_large.jpg?1561727173" alt="" />
      </div>
      <div className="flex gap-5 p-2">
        <FontAwesomeIcon className={`h-5 md:h-7 ${isRed ? "text-red-500":"text-black"}`} icon={faHeart} onClick={cambiarColorIcono}/>
        <FontAwesomeIcon className='h-5 md:h-7' icon={faComment} />
        <FontAwesomeIcon className='h-5 md:h-7' icon={faShare} />
      </div>
      <div className=''>
        <span className='font-bold'>amazonwebservices</span>
        <p>📌Link in the bio to Download Front-End Developer Interview Kit Javascript frameworks</p>
      </div>
    </div>    
    <div className="grid gap-2 p-5 bg-white">
      <div className="flex gap-2 justify-start items-center">
        <img className="bg-black w-10 h-10 rounded-full" src="https://static-00.iconduck.com/assets.00/aws-icon-2048x2048-ptyrjxdo.png" alt="" />
        <span className="text-sm font-bold">amazonwebservices</span>
        <div className='flex gap-2 justify-start items-center'>
          <span className='rounded-full w-1 h-1 bg-gray-400 bottom-2 left-1'></span>
          <span className='text-gray-400 text-sm'>1 day</span>
        </div>
      </div>
      <div className="border rounded-md">
        <img className="h-full w-full rounded-md" src="https://images.adsttc.com/media/images/5d16/10e1/284d/d168/6000/0108/newsletter/06_101065_03_Spheres_N8_large.jpg?1561727173" alt="" />
      </div>
      <div className="flex gap-5 p-2">
        <FontAwesomeIcon className={`h-5 md:h-7 ${isRed ? "text-red-500":"text-black"}`} icon={faHeart} onClick={cambiarColorIcono}/>
        <FontAwesomeIcon className='h-5 md:h-7' icon={faComment} />
        <FontAwesomeIcon className='h-5 md:h-7' icon={faShare} />
      </div>
      <div className=''>
        <span className='font-bold'>amazonwebservices</span>
        <p>📌Link in the bio to Download Front-End Developer Interview Kit Javascript frameworks</p>
      </div>
    </div>    
    <div className="grid gap-2 p-5 bg-white">
      <div className="flex gap-2 justify-start items-center">
        <img className="bg-black w-10 h-10 rounded-full" src="https://static-00.iconduck.com/assets.00/aws-icon-2048x2048-ptyrjxdo.png" alt="" />
        <span className="text-sm font-bold">amazonwebservices</span>
        <div className='flex gap-2 justify-start items-center'>
          <span className='rounded-full w-1 h-1 bg-gray-400 bottom-2 left-1'></span>
          <span className='text-gray-400 text-sm'>1 day</span>
        </div>
      </div>
      <div className="border rounded-md">
        <img className="h-full w-full rounded-md" src="https://images.adsttc.com/media/images/5d16/10e1/284d/d168/6000/0108/newsletter/06_101065_03_Spheres_N8_large.jpg?1561727173" alt="" />
      </div>
      <div className="flex gap-5 p-2">
        <FontAwesomeIcon className={`h-5 md:h-7 ${isRed ? "text-red-500":"text-black"}`} icon={faHeart} onClick={cambiarColorIcono}/>
        <FontAwesomeIcon className='h-5 md:h-7' icon={faComment} />
        <FontAwesomeIcon className='h-5 md:h-7' icon={faShare} />
      </div>
      <div className=''>
        <span className='font-bold'>amazonwebservices</span>
        <p>📌Link in the bio to Download Front-End Developer Interview Kit Javascript frameworks</p>
      </div>
    </div>    
    </>
  )
};

export default Post;