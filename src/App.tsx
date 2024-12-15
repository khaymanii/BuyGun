import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import LandingPage from "./pages/LandingPage";
import Contactus from "./pages/Contactus";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Contact" element={<Contactus />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
