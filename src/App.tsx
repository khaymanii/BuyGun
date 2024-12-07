import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Landingpage" element={<LandingPage />} />
      </Routes>
      </div>
  )
}