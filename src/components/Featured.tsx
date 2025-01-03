import { useCart } from "../context/CartContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { useEffect, useState } from "react";

type FeaturedCard = {
  id: string;
  image: string;
  span: string;
  button: string;
  rate: string;
  name: string;
  description: string;
  price: number;
};

export default function Featured() {
  const { addToCart } = useCart();
  const [cards, setCards] = useState<FeaturedCard[]>([]);

  useEffect(() => {
    const fetchFeaturedCards = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "featureCard"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as FeaturedCard[];
        setCards(data);
      } catch (error) {
        console.error("Error fetching featured cards:", error);
      }
    };

    fetchFeaturedCards();
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-10 mb-10 max-w-7xl mx-auto w-full px-4 tablet:px-6">
      <div className="flex flex-row text-center max-w-7xl mx-auto">
        <h2 className="font-semibold text-3xl">Featured</h2>
      </div>
      <div className="flex flex-wrap justify-between gap-5 items-center mobile:grid mobile:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 md:gap-6">
        {cards.map((card: FeaturedCard) => (
          <div
            className="flex flex-col bg-white rounded-lg shadow-lg p-4 w-full md:w-auto lg:w-[350px]"
            key={card.id}
          >
            <div className="relative flex flex-col items-center">
              <div className="bg-gray-100 w-full flex items-center justify-center">
                <img src={card.image} alt="" className="h-40 w-32 lg:w-40" />
              </div>
              <span className="absolute top-2 left-2 bg-white text-black px-2 text-sm rounded">
                {card.span}
              </span>
              <button
                className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-md opacity-90 mobile:px-3 mobile:py-1 text-xs"
                onClick={() =>
                  addToCart({
                    id: card.id,
                    name: card.name,
                    price: card.price,
                    image: card.image,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
            <div className="flex flex-col items-start mt-4">
              <h2 className="font-semibold text-base text-gray-800 md:text-lg">
                {card.name}
              </h2>
              <p className="text-gray-600 text-sm">{card.description}</p>
              <span className="font-bold text-gray-900 mt-2">
                ${card.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
