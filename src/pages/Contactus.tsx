import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { useAuth } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Contactus() {
  const { currentUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the user is logged in
    if (!currentUser) {
      toast.error("You must be logged in to submit the form.");
      setTimeout(() => {
        navigate("/signup");
      }, 2000);
      return;
    }

    try {
      // Save form data along with the user's UID
      await addDoc(collection(db, "contacts"), {
        uid: currentUser.uid, // Include the user's UID
        name,
        email,
        message,
        createdAt: new Date(),
      });

      // Display success toast
      toast.success("Message sent successfully!");

      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error submitting contact form:", err);

      // Display error toast
      toast.error("Failed to send the message. Please try again.");
    }
  };
  return (
    <div>
      <Navbar />
      <h1 className="font-semibold text-3xl text-center my-8">Contact Us</h1>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-6 px-4">
        <div className="md:w-1/3 h-44 rounded-lg bg-gray-100 text-center p-6 w-full">
          <div className="flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
          <p className="text-gray-500 font-bold">ADDRESS</p>
          <p className="font-semibold">234 Hiau Trieu, Hu Chin Mhin City,</p>
          <p className="font-semibold">Viet Nam</p>
        </div>
        <div className="md:w-1/3 h-44 rounded-lg bg-gray-100 text-center p-6 w-full">
          <div className="flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>

          <p className="text-gray-500 font-bold">CONTACT US</p>
          <p className="font-semibold">+845 475 2249</p>
        </div>
        <div className="md:w-1/3 h-44 rounded-lg bg-gray-100 text-center p-6 w-full">
          <div className="flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <p className="text-gray-500 font-bold">EMAIL</p>
          <p className="font-semibold">buygun@gmail.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 px-4">
        <form className="flex flex-col md:w-1/2 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border outline-none rounded-lg mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border outline-none rounded-lg mb-4"
          />
          <textarea
            className="p-2 border outline-none rounded-lg mb-6 h-40"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full md:w-1/3 text-center p-2 bg-black text-white rounded-lg"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center md:w-1/2 w-full">
          <img
            src="/assets/images/map.png"
            alt="map"
            className="w-full h-auto md:max-w-[600px] rounded-lg"
          />
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default Contactus;
