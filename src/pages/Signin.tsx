import { Link, useNavigate } from "react-router-dom";
import SignupImage from "/assets/images/ak5.jpg";
import { useAuth } from "../context/AuthContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SigninFormInputs {
  email: string;
  password: string;
}

function Signin() {
  const { signIn, loading } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormInputs>();

  const onSubmit: SubmitHandler<SigninFormInputs> = async (data) => {
    try {
      await signIn(data.email, data.password);
      toast.success("Signin successful!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      toast.error(
        "Signin failed. Please check your email and password details and try again."
      );
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
            onSubmit={handleSubmit(onSubmit)}
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-2 border-b border-b-gray-300 rounded ring-offset-0"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
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
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}

            <div className="flex flex-row items-center gap-5">
              <div className="flex flex-row items-center gap-48 mobile:gap-10">
                <div className="flex flex-row items-center gap-2">
                  <input type="checkbox" name="checkbox" id="" placeholder="" />
                  <span>Remember me</span>
                </div>
                <a href="#">Forgot password</a>
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
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default Signin;
