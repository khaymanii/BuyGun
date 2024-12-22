export default function Newsletter() {
  return (
    <div className=" bg-black ">
      <div className="flex flex-col items-center justify-center gap-4 px-4 py-8">
        <h2 className="text-white font-semibold text-xl">
          Join Our Newsletter
        </h2>
        <p className="text-white">
          Sign up for deals, new products and promotions
        </p>
        <form className="flex flex-row items-center">
          <input
            type="email"
            name="Email"
            id="Email"
            className="bg-transparent border-b-2 focus:outline-none text-white mr-2 w-[100%]"
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
    </div>
  );
}
