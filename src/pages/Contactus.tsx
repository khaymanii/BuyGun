function Contactus() {
  return (
    <div>
      <h1 className="font-semibold text-3xl text-center my-8">Contact Us</h1>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 mb-6">
        <div className="w-1/2 h-44 rounded-lg bg-gray-50 text-center p-6">
          <div className="flex items-center justify-center mb-2">
            {" "}
            <img
              src="../assets/icons/profile.svg"
              alt="address image"
              className="w-14 h-14"
            />
          </div>
          <p className="text-gray-500 text-bold">ADDRESS</p>
          <p className="text-semibold">234 Hiau Trieu, Hu Chin Mhin City,</p>
          <p className="text-semibold">Viet Nam</p>
        </div>
        <div className="w-1/2 h-44 rounded-lg bg-gray-50 text-center p-6">
          <div className="flex items-center justify-center mb-2">
            {" "}
            <img
              src="../assets/icons/profile.svg"
              alt="address image"
              className="w-14 h-14"
            />
          </div>

          <p className="text-gray-500 text-bold">CONTACT US</p>
          <p className="text-semibold">+845 475 2249</p>
        </div>{" "}
        <div className="w-1/2 h-44 rounded-lg bg-gray-50 text-center p-6">
          <div className="flex items-center justify-center mb-2">
            {" "}
            <img
              src="../assets/icons/profile.svg"
              alt="address image"
              className="w-14 h-14"
            />
          </div>
          <p className="text-gray-500 text-bold">EMAIL</p>
          <p className="text-semibold">buygun@gmail.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <form className="flex flex-col w-1/2">
          <input
            type="text"
            placeholder="Your Full Name"
            className="p-2 border outline-none rounded-lg mb-4"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="p-2 border outline-none rounded-lg mb-4"
          />
          <textarea
            className="p-2 border outline-none rounded-lg mb-6 h-40"
            placeholder="Your Message"
          ></textarea>
          <button
            title="Send Message"
            type="submit"
            className="w-1/3 text-center p-2 bg-black text-white rounded-lg"
          >
            Send Message
          </button>
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default Contactus;
