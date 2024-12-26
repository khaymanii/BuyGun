import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
function Checkout() {
  const { subtotal } = useCart();

  return (
    <div>
      <Navbar />
      <div className="bg-black w-full h-64 flex items-center justify-center">
        <h1 className="font-semibold text-3xl text-center text-white">
          Checkout{" "}
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-14 lg:flex-row flex flex-col justify-between">
        <div className="lg:w-2/3 md:w-full w-full">
          <h1 className="text-xl font-semibold mb-4 tracking-wider">
            Billing Address
          </h1>
          <form className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Enter your name"
              className="p-2 border outline-none rounded-lg mb-4"
            />
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 border outline-none rounded-lg mb-4"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="p-2 border outline-none rounded-lg mb-4"
            />{" "}
            <input
              type="text"
              placeholder="Street address"
              className="p-2 border outline-none rounded-lg mb-4"
            />{" "}
            <input
              type="text"
              placeholder="City"
              className="p-2 border outline-none rounded-lg mb-4"
            />
            <input
              type="text"
              placeholder="Country"
              className="p-2 border outline-none rounded-lg mb-4"
            />
          </form>{" "}
        </div>
        <div className="lg:w-96 w-full h-72 bg-black text-white rounded-lg p-4 tracking-wider">
          <div className="flex items-start justify-between mb-2">
            {" "}
            <div>
              <p className="mb-2 tracking-wider">Subtotal:</p>
              <p className="mb-2 tracking-wider">Shipping:</p>
              <p className="mb-2 tracking-wider">free shipping</p>
            </div>
            <div>
              <p className="mb-2"> ${subtotal.toFixed(2)}</p>
              <p className="mb-2">$0</p>
            </div>
          </div>
          <div className="flex justify-between mb-12">
            <p className="text-xl font-semibold tracking-wider">Total:</p>
            <p className="text-xl font-semibold tracking-wider">
              {" "}
              ${subtotal.toFixed(2)}
            </p>
          </div>
          <button
            title="Place Order Now"
            type="submit"
            className="w-full text-center p-2 bg-white text-black rounded-lg font-semibold"
          >
            Place Order Now{" "}
          </button>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default Checkout;
