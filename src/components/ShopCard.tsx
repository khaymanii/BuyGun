import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ShopCard({
  id,
  image,
  name,
  price,
}: {
  id: string;
  image: string;
  name: string;
  price: number;
}) {
  const { addToCart } = useCart();

  return (
    <div className="mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3">
      <Link to={`/product/${id}`} className="cursor-pointer">
        <div>
          <div className="flex items-center justify-center bg-gray-200 w-full h-48 sm:h-56 lg:h-60 mb-2 rounded-lg">
            <img src={image} alt={name} className="w-[200px] h-[200px]" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-xl">{name}</p>
              <p className="font-semibold text-lg">{price}</p>
            </div>
          </div>
        </div>
      </Link>
      <div
        className="w-8 h-8 bg-black rounded-full text-white font-bold flex items-center justify-center mt-2"
        onClick={() => addToCart({ id, name, price, image })}
      >
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
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
    </div>
  );
}

export default ShopCard;
