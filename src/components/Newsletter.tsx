export default function Newsletter() {
  return (
    <div className="flex flex-row bg-black items-center justify-between">
      <img
        src="/assets/images/ak1bg.png"
        alt=""
        className="h-40 w-80 mobile:hidden"
      />
      <div className="flex flex-col items-center gap-4 p-3">
        <h2 className="text-white font-semibold">Join Our Newsletter</h2>
        <p className="text-white">
          Sign up for deals, new products and promotions
        </p>
        <form className="flex flex-row items-center w-full">
          <input
            type="email"
            name="Email"
            id="Email"
            className="bg-transparent border-b-2 focus:outline-none w-full"
            placeholder="Email Address"
          />
          <button
            type="submit"
            className="bg-transparent text-white rounded-md px-1"
          >
            Signup
          </button>
        </form>
      </div>
      <img
        src="/assets/images/ak4bg.png"
        alt=""
        className="h-40 mobile:hidden"
      />
    </div>
  );
}
