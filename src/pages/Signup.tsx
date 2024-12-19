import { Link, useNavigate } from "react-router-dom";
import SignupImage from "/assets/images/ak5.jpg";
import { useAuth } from "../context/AuthContext";
import { useForm, SubmitHandler } from "react-hook-form";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
  termsAccepted: boolean;
}

function Signup() {
  const { signUp, loading } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    try {
      await signUp({
        displayName: data.name,
        email: data.email,
        password: data.password,
      });
      toast.success("Signup successful! Redirecting to signin page...");
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (err) {
      toast.error("Signup failed. Please try again.");
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
            onSubmit={handleSubmit(onSubmit)}
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
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border-b border-b-gray-300 rounded ring-offset-0"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <input
              type="email"
              placeholder="Email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-2 border-b border-b-gray-300 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className="w-full p-2 border-b border-b-gray-300 rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <div className="flex flex-row items-center gap-5">
              <input
                type="checkbox"
                {...register("termsAccepted", {
                  required: "You must accept the terms and conditions",
                })}
              />
              <span className="mobile:text-[12px]">
                I agree with <strong>Privacy Policy</strong> and{" "}
                <strong>Terms of use</strong>
              </span>
            </div>
            {errors.termsAccepted && (
              <p className="text-red-500 text-sm">
                {errors.termsAccepted.message}
              </p>
            )}
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
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default Signup;
