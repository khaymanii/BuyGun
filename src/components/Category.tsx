import { categoriesCard } from "../../Utils/Data";
import { Link } from "react-router-dom";
export default function Category() {
  return (
    <div className="flex flex-col gap-10 mb-10 items-center">
      <h2 className="text-black text-3xl font-semibold">Shop by categories</h2>
      <div className="grid grid-cols-4 gap-10 mobile:grid mobile:grid-cols-2 mobile:p-4">
        {categoriesCard.map((card, index) => (
          <div className="flex flex-col gap-5 items-center" key={index}>
            <img src={card.Image} alt="" className="w-60 h-60 bg-gray-100" />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
      <div className=" bg-black flex flex-row items-center mobile:flex-col">
        <img
          src="/assets/images/soldier3.jpg"
          alt="Soldier"
          className="w-1/2 object-cover mobile:order-2 mobile:w-full"
        />
        <div className=" w-1/2 h-full mobile:order-1 mobile:w-full">
          <div className="flex flex-col mobile:px-2 px-6 py-8 gap-3">
            <h2 className="text-green-600 text-sm">LIMIT EDITION</h2>
            <p className="text-white text-[30px]">Hurry up! 30% OFF</p>
            <span className="text-gray-300">
              Finds Gun that are right for your Game.
            </span>
            <span className="text-white text-[12px]">Offers Expires in:</span>
            <div className="flex flex-row items-center gap-4">
              <span className="bg-white px-2 py-1 font-semibold">02</span>
              <span className="bg-white px-2 py-1 font-semibold">12</span>
              <span className="bg-white px-2 py-1 font-semibold">45</span>
              <span className="bg-white px-2 py-1 font-semibold">05</span>
            </div>

            <Link to="/shop">
              {" "}
              <button
                type="submit"
                className="bg-green-500 rounded-md w-[20%] mobile:w-[50%] px-3 py-2 mt-5 text-white text-nowrap"
              >
                {" "}
                Shop Now{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
