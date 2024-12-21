import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase"; // Adjust the path to your Firebase config
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { ToastContainer } from "react-toastify";
interface Product {
  id: string;
  productName: string;
  image: string;
  price: string | number;
  brand: string;
  category: string;
  caliber: string;
  weight: string;
  quantity: number;
  description: string;
}

function ProductDetails() {
  const { id } = useParams(); // Get product ID from the URL

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) throw new Error("Product ID not provided");
        const productDoc = await getDoc(doc(db, "products", id));
        if (productDoc.exists()) {
          const productData = productDoc.data();
          if (productData) {
            setProduct({
              id: productDoc.id,
              productName: productData.productName,
              image: productData.image,
              price: productData.price,
              brand: productData.brand,
              category: productData.category,
              caliber: productData.caliber,
              weight: productData.weight,
              quantity: productData.quantity,
              description: productData.description,
            });
          }
        } else {
          setError("Product not found");
        }
      } catch (err) {
        if (err instanceof Error) {
          console.error("Error fetching product:", err.message);
        } else {
          console.error("Error fetching product:", err);
        }
        setError("Failed to fetch product. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div role="status" className="flex items-center justify-center h-screen">
        <svg
          aria-hidden="true"
          className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!product) {
    return (
      <h2 className="flex items-center justify-center h-screen">
        Product not found
      </h2>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="bg-black w-full h-64 flex items-center justify-center">
        <h1 className="font-semibold text-3xl text-center text-white">
          {product.productName}{" "}
        </h1>
      </div>
      <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-row flex-col justify-between items-center px-4 mt-8">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center mb-4 lg:mb-0">
          <img
            src={product.image}
            alt={product.productName}
            className="w-full max-w-[500px]"
          />
        </div>

        {/* Details Section */}
        <div className="lg:w-1/2 w-full">
          <h1 className="text-4xl font-semibold lg:mb-4 mb-2">
            {product.productName}{" "}
          </h1>
          <p className="font-semibold lg:mb-8 mb-2 text-2xl">
            {" "}
            $
            {typeof product.price === "number"
              ? product.price.toFixed(2)
              : product.price}
          </p>
          <div className="flex flex-wrap items-center justify-between font-normal sm:text-lg lg:text-xl text-lg lg:mb-8 mb-4">
            <p className="w-full sm:w-1/2 mb-2">
              Brand: <span className="font-semibold">{product.brand}</span>
            </p>
            <p className="w-full sm:w-1/2 mb-2">
              Category:{" "}
              <span className="font-semibold">{product.category}</span>
            </p>
            <p className="w-full sm:w-1/2 mb-2">
              Caliber: <span className="font-semibold">{product.caliber}</span>
            </p>
            <p className="w-full sm:w-1/2 mb-2">
              Weight: <span className="font-semibold">{product.weight}</span>
            </p>
            <p className="w-full sm:w-1/2 mb-2">
              Quantity in Stock:{" "}
              <span className="font-semibold">{product.quantity}</span>
            </p>
          </div>
          <p className="sm:text-lg lg:text-xl text-lg mb-8 text-gray-500">
            {product.description}
          </p>
          <button
            className="text-white bg-black px-4 py-3 w-full sm:w-[50%] rounded-lg font-semibold"
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.productName,
                price: product.price.toString(),
                image: product.image,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default ProductDetails;
