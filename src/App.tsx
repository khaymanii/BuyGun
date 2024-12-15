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
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}
