import Category from "../components/Category";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ShopCollection from "../components/ShopCollection";
import SocialMedia from "../components/SocialMedia";

export default function LandingPage() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Featured />
      <Category />
      <ShopCollection />
      <Newsletter />
      <SocialMedia />
      <Footer />
    </div>
  );
}
