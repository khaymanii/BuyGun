import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { ToastContainer } from "react-toastify";

function Cart() {
  return (
    <div>
      <Navbar />
      <div className="bg-black w-full h-64 flex items-center justify-center">
        <h1 className="font-semibold text-3xl text-center text-white">Cart </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-14 lg:flex-row flex flex-col justify-between">
        {" "}
        <div className="lg:w-2/3 md:w-full w-full rounded-lg border border-b h-auto py-4 mobile:px-2 mobile:mb-4 tablet:mb-4">
          <Table />
        </div>{" "}
        <div className="lg:w-96 w-full h-72 bg-black text-white rounded-lg p-4 tracking-wider">
          {" "}
          <div className="flex justify-between mb-6">
            <p className="text-2xl font-semibold tracking-wider">Subtotal:</p>
            <p className="text-2xl font-semibold tracking-wider">$650</p>
          </div>
          <p className="text-white tracking-wider text-lg mb-12">
            Taxes and shipping will calculate in checkout
          </p>
          <Link to="/checkout">
            {" "}
            <button
              title="Checkout"
              type="submit"
              className="w-full text-center p-2 bg-white text-black rounded-md font-semibold mb-4"
            >
              {" "}
              Checkout{" "}
            </button>{" "}
          </Link>
          <Link to="/shop">
            {" "}
            <button
              title="Continue Shopping"
              type="submit"
              className="w-full text-center p-2 bg-white text-black rounded-md font-semibold"
            >
              {" "}
              Continue Shopping{" "}
            </button>
          </Link>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default Cart;
