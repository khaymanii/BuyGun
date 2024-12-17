import { Link, useNavigate } from "react-router-dom";
import SignupImage from "/assets/images/ak5.jpg";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Signup() {
  const { signUp, loading } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error message on submit

    try {
      await signUp({ displayName: name, email, password });
      navigate("/signin");
    } catch (err) {
      setError("Signup failed. Please try again.");
      console.error("Error during signup:", err);
    }
  };

  return (
    <div className="flex h-screen tablet:flex-col lg:fixed">
      <div className="flex-1 items-center justify-center">
        <img src={SignupImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-10 mobile:gap-10 tablet:mt-5">
          <h2 className="text-3xl font-semibold">Buygun</h2>
          <form
            className="w-4/4 max-w-md space-y-4 mb-8 mobile:px-4"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold">Sign Up</h2>
            <div className="flex flex-row items-center gap-2">
              <span>Already have an account?</span>
              <Link to="/Signin" className="text-green-500">
                Sign in
              </Link>
            </div>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border-b border-b-gray-300 rounded ring-offset-0"
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 border-b border-b-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border-b border-b-gray-300 rounded"
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
              <input type="checkbox" name="" id="" placeholder="checkbox" />
              <span className="mobile:text-[12px]">
                I agree with <strong>Privacy Policy </strong> and{" "}
                <strong>Terms of use</strong>
              </span>
            </div>
            <button
              type="submit"
              className=" flex justify-center items-center w-full p-2 bg-black text-white rounded"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Signing Up..." : "Sign up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
