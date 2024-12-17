import { Link, useNavigate } from "react-router-dom";
import SignupImage from "/assets/images/ak5.jpg";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Signin() {
  const { signIn, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error message on submit

    try {
      await signIn(email, password);
      navigate("/");
    } catch (err) {
      setError("Signin failed. Please check your credentials and try again.");
      console.error("Error during signin:", err);
    }
  };
  return (
    <div className="flex h-screen tablet:flex-col lg:fixed">
      <div className="flex-1 items-center justify-center">
        <img src={SignupImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-10 mobile:mt-5 mobile:gap-10 tablet:mt-3">
          <h2 className="text-3xl font-semibold">Buygun</h2>
          <form
            className="w-4/4 max-w-md  space-y-4 mobile:px-4 mb-8"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold">Sign In</h2>
            <div className="flex flex-row items-center gap-2">
              <span>Don’t have an account yet?</span>
              <Link to="/Signup" className="text-green-500">
                Sign up
              </Link>
            </div>
            <input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border-b border-b-gray-300 rounded ring-offset-0"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border-b border-b-gray-300 rounded"
            />
            {error && <p className="text-red-500 mt-1">{error}</p>}

            <div className="flex flex-row items-center gap-5">
              <div className="flex flex-row items-center gap-48 mobile:gap-10">
                <div className="flex flex-row items-center gap-2">
                  <input type="checkbox" name="checkbox" id="" placeholder="" />
                  <span>Remember me</span>
                </div>
                <a href="#">Forget password</a>
              </div>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-full p-2 bg-black text-white rounded"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
