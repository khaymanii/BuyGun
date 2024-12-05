function Contactus() {
  return (
    <div>
      <h1 className="font-semibold text-3xl text-center my-8">Contact Us</h1>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 mb-6">
        <div className="lg:w-1/2 h-44 rounded-lg bg-gray-50 text-center p-6">
          <div className="flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
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
          <p className="text-gray-500 text-bold">ADDRESS</p>
          <p className="text-semibold">234 Hiau Trieu, Hu Chin Mhin City,</p>
          <p className="text-semibold">Viet Nam</p>
        </div>
        <div className="w-1/2 h-44 rounded-lg bg-gray-50 text-center p-6">
          <div className="flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>

          <p className="text-gray-500 text-bold">CONTACT US</p>
          <p className="text-semibold">+845 475 2249</p>
        </div>{" "}
        <div className="w-1/2 h-44 rounded-lg bg-gray-50 text-center p-6">
          <div className="flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-bold">EMAIL</p>
          <p className="text-semibold">buygun@gmail.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex justify-between">
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
        <div>
          <img
            src="/assets/images/map.png"
            alt="map"
            className="w-[600px] h-[330px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Contactus;
