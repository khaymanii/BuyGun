import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import LandingPage from "./pages/LandingPage";
import Contactus from "./pages/Contactus";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Shop" element={<Shop />} />

        <Route path="/Landingpage" element={<LandingPage />} />
      </Routes>
    </div>
  );
}
