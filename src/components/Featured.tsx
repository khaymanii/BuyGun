import { featuredCard } from "../../Utils/Data";
import { useCart } from "../context/CartContext";
export default function Featured() {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col gap-4 mt-10 mb-10 max-w-7xl mx-auto w-full">
      <div className="flex flex-row text-center max-w-7xl mx-auto">
        <h2 className="font-semibold text-3xl">Featured</h2>
      </div>
      <div className="flex flex-wrap justify-between gap-5 items-center mobile:grid mobile:grid-cols-1 mobile:px-4 sm:grid-cols-2 md:gap-6 md:grid-cols-3">
        {featuredCard.map((card, index) => (
          <div
            className="flex flex-col bg-white rounded-lg shadow-md p-4 w-full sm:w-[300px] md:w-[250px] lg:w-[350px]"
            key={index}
          >
            <div className="relative flex flex-col items-center">
              <img
                src={card.image}
                alt=""
                className="h-60 w-full object-cover bg-gray-100 rounded-md mobile:h-40"
              />
              <span className="absolute top-2 left-2 bg-white text-black px-2 text-sm rounded">
                {card.span}
              </span>
              <button
                className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-md opacity-90 mobile:px-3 mobile:py-1 text-xs"
                onClick={addToCart}
              >
                {card.button}
              </button>
            </div>
            <div className="flex flex-col items-start mt-4">
              <img src={card.rate} alt="" className="w-16 md:w-20" />
              <h2 className="font-semibold text-base text-gray-800 md:text-lg">
                {card.name}
              </h2>
              <p className="text-gray-600 text-sm">{card.description}</p>
              <span className="font-bold text-gray-900 mt-2">{card.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
