import { toast, ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

import { useCart } from "../context/CartContext";
function Checkout() {
  const { cartItems, subtotal, cartCount } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, address, city, country } = formData;

    if (!name || !email || !phone || !address || !city || !country) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      // Add order to Firestore
      const ordersRef = collection(db, "orders");
      await addDoc(ordersRef, {
        customerName: formData.name,
        address: formData.address,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        country: formData.country,
        cartItems,
        subtotal,
        cartCount,
        createdAt: serverTimestamp(),
      });

      toast.success("Order placed successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
      });

      // Optionally, clear the cart state or navigate to another page
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to place order. Please try again.");
    }
  };

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
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border outline-none rounded-lg mb-4"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border outline-none rounded-lg mb-4"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 border outline-none rounded-lg mb-4"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Street address"
              value={formData.address}
              onChange={handleChange}
              className="p-2 border outline-none rounded-lg mb-4"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="p-2 border outline-none rounded-lg mb-4"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="p-2 border outline-none rounded-lg mb-4"
              required
            />
            <button
              title="Place Order Now"
              type="submit"
              className="w-full text-center p-2 bg-black text-white rounded-lg font-semibold"
            >
              Place Order Now
            </button>
          </form>
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
            onSubmit={handleSubmit}
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
