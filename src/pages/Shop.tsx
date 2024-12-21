// import { products } from "../../Utils/Data";
import ShopCard from "../components/ShopCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

function Shop() {
  interface Product {
    id: string;
    image: string;
    productName: string;
    price: number;
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Firestore's document ID is a string
          ...doc.data(),
        })) as Product[];
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
        {products.map((product: Product) => (
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
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default Shop;
