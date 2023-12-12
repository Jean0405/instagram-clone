import { Link } from 'react-router-dom';

function SignUp() {
  return(
      <div className="h-screen flex justify-center items-center">
        <form className="grid justify-center sm:w-80 m-auto px-5 py-3">
        <div className="grid place-items-center">
          <img className="w-40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" alt="" />
          <h2 className="text-md font-semibold text-center text-gray-500 pb-5">Register to view photos and videos of your friends</h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 px-3">
          <input className="w-full bg-gray-100 border p-1.5 outline-none" type="email" placeholder="Email" required/>
          <input className="w-full bg-gray-100 border p-1.5 outline-none" type="text" placeholder="Full Name" required/>
          <input className="w-full bg-gray-100 border p-1.5 outline-none" type="text" placeholder="Username" required/>
          <input className="w-full bg-gray-100 border p-1.5 outline-none" type="password" placeholder="Password" required/>
        </div>
        <div className="grid text-center gap-5 pt-5">
          <div className="text-gray-500 px-5 text-sm">
          Users of our service may have uploaded your contact information on Instagram<span><a className="text-blue-800" href="https://www.facebook.com/help/instagram/261704639352628"> More info</a></span>
          </div>
          <div className="text-gray-500 px-5 text-sm">
          By registering, you agree to our Terms and Conditions, our Privacy Policy and our Cookie Policy.
          </div>
        </div>
        <input className="btn bg-blue-500 text-white font-bold rounded-md py-2 px-3 mt-5 cursor-pointer" type="submit" value="Register" />
        <p className='text-md text-center pt-1'>You already have an account? <Link to="/signIn" className='text-blue-500'>Sign In</Link></p>
      </form>
      </div>
  )
}

export default SignUp