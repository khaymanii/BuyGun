import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function ProductDetails() {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="bg-black w-full h-64 flex items-center justify-center">
        {" "}
        <h1 className="font-semibold text-3xl text-center text-white">
          Glock 19 Gen 5
        </h1>
      </div>
      <div className="max-w-7xl mx-auto sm:flex lg:flex-row flex-col justify-between items-center">
        <div className="sm:w-1/2 w-full">
          <img
            src="/assets/images/ak7bg.png"
            alt="ak7bg"
            className="w-[500px]]"
          />
        </div>
        <div className="sm:w-1/2 lg:w-1/2 w-full">
          <h1 className="text-4xl font-semibold lg:mb-4 mb-2 sm:mx-0 mx-2">
            Glock 19 Gen 5
          </h1>
          <p className="font-semibold lg:mb-8 mb-2 text-2xl sm:mx-0 mx-2">
            $499.9
          </p>

          <div className="flex flex-wrap items-center justify-between font-normal sm:text-xl lg:text-xl text-2xl lg:mb-8 mb-4 lg:flex-row sm:mx-0 mx-2">
            <p>
              Brand: <span className="font-semibold">Glock</span>
            </p>
            <p>
              Category: <span className="font-semibold">Handgun</span>
            </p>
            <p>
              Caliber: <span className="font-semibold">9mm</span>
            </p>
            <p>
              Weight: <span className="font-semibold">670g</span>
            </p>
            <p>
              Quantity in Stock: <span className="font-semibold">24</span>
            </p>
          </div>
          <p className="sm:text-xl lg:text-xl text-2xl mb-8 sm:mx-0 mx-2 text-gray-500">
            The Glock 19 Gen 5 is a compact 9mm handgun perfect for personal
            defense.
          </p>
          <button className="text-white bg-black px-4 py-3 w-[50%] sm:mx-0 mx-2 rounded-lg font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
