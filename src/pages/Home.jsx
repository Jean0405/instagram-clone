import Aside from "../components/Aside"
import MenuMoviles from "../components/MenuMoviles"
import Post from "../components/Post"
import Suggestions from "../components/Suggestions"

function Home() {

  return (
    <>
      <div className="grid grid-cols-6 lg:grid-cols-6">
        <div className="hidden md:block sticky w-full top-0 h-screen">{<Aside/>}</div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3">{<Post/>}</div>
        <div className="hidden lg:block col-span-2">{<Suggestions/>}</div>
      </div>
      <div className="md:hidden fixed bottom-0">{<MenuMoviles/>}</div>
    </>
  )
}

export default Home
