import { Link } from "react-router-dom";
import SignupImage from "../assets/images/ak5.jpg"

function Signin() {
  return <div className="flex h-screen mobile:flex-col">
    <div className="flex-1 items-center justify-center">
      <img src={SignupImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex items-center justify-center bg-white">
        <form className="w-3/4 max-w-md space-y-4">
          <h2 className="text-2xl font-semibold">Sign In</h2>
          <div className="flex flex-row items-center gap-2">
          <span>Don’t have an accout yet?</span>
             <Link to="/Signup" className="text-green-500">Sign up</Link> 
             </div>
          <input type="text" placeholder="Your Username or email address" className="w-full p-2 border-b border-b-gray-300 rounded ring-offset-0" />
          <input type="password" placeholder="Password" className="w-full p-2 border-b border-b-gray-300 rounded" />
          <div className="flex flex-row items-center gap-5">
           <div className="flex flex-row items-center gap-48 mobile:gap-10">
           <div className="flex flex-row items-center gap-2">
                    <input type="checkbox" name="checkbox" id="" />
                    <span>Remember me</span>
            </div>
                    <a href="#">Forget password</a>
            </div>
         
          </div>
          <Link to="/Landingpage" type="submit" className="flex items-center justify-center w-full p-2 bg-black text-white rounded">Sign in</Link>
        </form>
      </div>

  </div>;
}

export default Signin;
