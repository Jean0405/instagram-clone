function Suggestions() {

  const profileSuggestions = [
    {
      avatar: "https://frases.top/wp-content/uploads/2021/08/la-mejor-foto-de-perfil-para-whatsapp.jpg",
      username: "kjean_0405"
    },
    {
      avatar: "https://tecnocuenta.com/wp-content/uploads/2022/06/photo_2022-06-24_09-33-46.jpg",
      username: "HitlelFoot"
    },
    {
      avatar: "https://media.admagazine.com/photos/637d11a6e63c8afac40e7a01/1:1/w_2896,h_2896,c_limit/1442809583",
      username: "messi_10"
    },
    {
      avatar: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt62c1f72f3faf5a75/615f6f8253c1047dae1e7232/60ca2df95008c9d496e6bca5ff37da04aaad86e2.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      username: "falcao_teamo"
    },
    {
      avatar: "https://es.web.img3.acsta.net/pictures/17/02/06/17/01/343859.jpg",
      username: "keanu_reeves"
    },
  ]

  return(
    <div className="p-5">
      <div className="cursor-pointer flex items-center rounded-md hover:bg-gray-200 p-1.5">
        <img className="w-12 h-12 object-cover object-center rounded-full" src="https://s1.eestatic.com/2023/01/27/el-cultural/letras/736936743_230463296_1706x960.jpg" alt="" />
        <div className="flex pl-2">
          <div className="flex flex-col">
            <span className="font-bold">Jeff_BezosAWS</span>
            <span className="text-gray-600">Jeff Bezos</span>
          </div>
        </div>
      </div>
      <div className="pt-6">
        <p className="text-gray-400 font-bold">Suggestions for you</p>
      </div>
      {
        profileSuggestions.map(profile=>(
          <div key={profile.username} className="cursor-pointer flex justify-center items-center p-3">
            <img className="w-12 h-12 object-cover object-center rounded-full" src={profile.avatar} alt="" />
            <div className="flex w-full justify-between">
              <span className="font-bold hover:text-blue-500 pl-2">{profile.username}</span>
              <button className="text-blue-500 font-bold hover:bg-blue-100 p-1 rounded-md">Follow</button>
            </div>
          </div>
        ))
      }
      <div className="pt-10">
        <p className="text-gray-500 text-sm text-center">© 2023 INSTAGRAM FROM JEAN</p>
      </div>
    </div>
  )
}

export default Suggestions