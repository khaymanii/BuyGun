import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Checkout() {
  return (
    <div>
      <Navbar />
      <div className="bg-black w-full h-64 flex items-center justify-center">
        <h1 className="font-semibold text-3xl text-center text-white">
          Checkout{" "}
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 my-8">
        <div>
          <h1 className="text-xl font-semibold mb-4">Billing Address</h1>
          <form className="flex flex-col lg:w-2/3 md:w-1/2 w-full">
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
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
