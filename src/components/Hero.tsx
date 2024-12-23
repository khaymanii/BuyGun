import { Link } from "react-router-dom";
import backgroundImage from "/assets/images/ak4bg.png";
export default function Hero() {
  return (
    <div className="bg-black">
      <div className="flex mobile:flex-col max-w-7xl mx-auto tablet:items-center">
        <div className="flex-1 items-center justify-center mobile:order-2 mobile:pb-10 tablet:px-5">
          <div className="flex flex-col items-start gap-5 py-28 mobile:items-center mobile:p-4">
            <h2 className="text-white font-semibold text-5xl w-[90%] mobile:w-full mobile:text-center tablet:text-4xl">
              More Than a Tool. It's a Statement.
            </h2>
            <span className="text-white w-[80%] opacity-80 mobile:w-full mobile:text-center">
              Whether you’re a first-time buyer, a seasoned collector, or a
              professional marksman, your choice of firearm is as unique as you
              are. Every piece tells a story and becomes an extension of your
              skill, precision, and purpose.
            </span>
            <Link
              to="/shop"
              className="bg-green-500 flex items-center justify-center p-2 text-white rounded-lg w-[50%]"
            >
              Shopping Now{" "}
            </Link>
          </div>
        </div>
        <div className="flex-1 items-center justify-center mobile:order-1">
          <img src={backgroundImage} alt="" />
        </div>
      </div>
    </div>
  );
}
