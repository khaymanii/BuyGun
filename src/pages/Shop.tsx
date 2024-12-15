import { products } from "../../Utils/Data";
import ShopCard from "../components/ShopCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Shop() {
  return (
    <div>
      {" "}
      <Navbar />
      <h1 className="font-semibold text-3xl text-center my-8">Shop</h1>
      <div className="bg-gray-200 w-full mb-10">
        <img
          src="/assets/images/g4.jpg"
          alt="gunbg"
          className="w-full sm:h-[400px] h-[300px]"
        />
      </div>
      <div className="max-w-7xl mx-auto flex-wrap justify-between flex">
        {products.map((product) => (
          <ShopCard
            id={product.id}
            key={product.id}
            image={product.image}
            name={product.productName}
            price={`$${product.price.toFixed(2)}`}
          />
        ))}{" "}
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
