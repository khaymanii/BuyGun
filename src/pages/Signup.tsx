import { Link } from "react-router-dom";
import SignupImage from "../assets/images/ak5.jpg"

function Signup() {
  return <div className="flex h-screen mobile:flex-col">
    <div className="flex-1 items-center justify-center">
      <img src={SignupImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex items-center justify-center bg-white mobile:mt-5">
        <form className="w-3/4 max-w-md space-y-4 mb-5">
          <h2 className="text-2xl font-semibold">Sign Up</h2>
          <div className="flex flex-row items-center gap-2">
          <span>Already have an account?</span>
             <Link to="/Signin" className="text-green-500">Sign in</Link> 
             </div>
          <input type="text" placeholder="Your name" className="w-full p-2 border-b border-b-gray-300 rounded ring-offset-0" />
          <input type="text" placeholder="Username" className="w-full p-2 border-b border-b-gray-300 rounded" />
          <input type="email" placeholder="Email address" className="w-full p-2 border-b border-b-gray-300 rounded" />
          <input type="password" placeholder="Password" className="w-full p-2 border-b border-b-gray-300 rounded" />
          <div className="flex flex-row items-center gap-5">
          <input type="checkbox" name="" id="" />
          <span className="mobile:text-[12px]">I agree with <strong>Privacy Policy </strong> and <strong>Terms of use</strong></span>
          </div>
          <Link to="/Landingpage" type="submit" className=" flex justify-center items-center w-full p-2 bg-black text-white rounded">Sign up</Link>
        </form>
      </div>

  </div>;
}

export default Signup;
