import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto text-center py-20 lg:py-28 px-4 flex flex-col items-center justify-center">
        <h2 className="text-white font-semibold text-3xl lg:text-5xl mb-4">
          More Than a Tool. It's a Statement.
        </h2>
        <p className="text-white w-[90%] lg:w-[50%] mb-10 lg:text-lg">
          Whether you’re a first-time buyer, a seasoned collector, or a
          professional marksman, your choice of firearm is as unique as you are.
          Every piece tells a story and becomes an extension of your skill,
          precision, and purpose.
        </p>
        <Link
          to="/shop"
          className="bg-green-500 flex items-center justify-center p-2 text-white rounded-lg w-[50%]"
        >
          Shopping Now
        </Link>
      </div>
    </div>
  );
}
