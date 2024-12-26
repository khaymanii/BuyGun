import { Link } from "react-router-dom";
import backgroundImage from "/assets/images/ak4bg.png";

export default function Hero() {
  return (
    <div className="bg-black">
      <div className="flex mobile:flex-col max-w-7xl mx-auto tablet:flex-row tablet:gap-10 tablet:items-center">
        <div className="flex-1 items-center justify-center mobile:order-2 mobile:py-8 tablet:px-5">
          <div className="flex flex-col items-start gap-3 py-28 mobile:items-center mobile:p-4 tablet:py-16 tablet:items-start">
            <h2 className="text-white font-semibold text-5xl w-[90%] mobile:w-full mobile:text-center tablet:text-3xl tablet:w-[80%] tablet:text-left">
              More Than a Tool. It's a Statement.
            </h2>
            <span className="text-white w-[90%] tablet:w-[100%] opacity-80 mobile:w-full mobile:text-center tablet:text-left">
              Whether you’re a first-time buyer, a seasoned collector, or a
              professional marksman, your choice of firearm is as unique as you
              are. Every piece tells a story and becomes an extension of your
              skill, precision, and purpose.
            </span>
            <Link
              to="/shop"
              className="bg-green-500 flex items-center justify-center p-2 text-white rounded-lg w-[50%] mobile:w-[60%] tablet:w-[40%]"
            >
              Shopping Now
            </Link>
          </div>
        </div>
        <div className="flex-1 items-center justify-center mobile:order-1 mobile:hidden tablet:flex tablet:justify-end">
          <img src={backgroundImage} alt="" className="tablet:w-[800px]" />
        </div>
      </div>
    </div>
  );
}
