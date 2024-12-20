import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { products } from "../../Utils/Data";
import { useCart } from "../context/CartContext";
import { ToastContainer } from "react-toastify";

function ProductDetails() {
  const { id } = useParams(); // Get product ID from the URL
  const product = products.find((item) => item.id === parseInt(id || "")); // Find the product by ID
  const { addToCart } = useCart();

  if (!product) {
    return <h2>Product not found</h2>;
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
            ${product.price.toFixed(2)}
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
            onClick={addToCart}
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
