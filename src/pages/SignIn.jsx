import { Link } from 'react-router-dom';

function SignIn() {
  return(
      <div className="h-screen flex justify-center items-center">
        <form className="grid justify-center sm:w-80 m-auto px-5 py-3">
        <div className="grid place-items-center">
          <img className="w-40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" alt="" />
          <h2 className="text-md font-semibold text-center text-gray-500 pb-5">Share your stories with your friends</h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 px-3">
          <input className="w-full bg-gray-100 border p-1.5 outline-none" type="text" placeholder="Username" required/>
          <input className="w-full bg-gray-100 border p-1.5 outline-none" type="password" placeholder="Password" required/>
        </div>
        <input className="btn bg-blue-500 text-white font-bold rounded-md py-2 px-3 mt-5 cursor-pointer" type="submit" value="Sign In" />
        <p className='text-md text-center'>Don't have an account?<Link to="/" className='text-blue-500'> Sign Up</Link></p>
      </form>
      </div>
  )
}

export default SignIn