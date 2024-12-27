import { categoriesCard } from "../../Utils/Data";
export default function Category() {
  return (
    <div className="flex flex-col gap-10 mb-10 items-center">
      <h2 className="text-black text-3xl font-semibold">Shop by categories</h2>
      <div className="grid grid-cols-4 gap-6 mobile:grid mobile:grid-cols-2 mobile:p-4  tablet:mx-5 mobile:mx-2">
        {categoriesCard.map((card, index) => (
          <div className="flex flex-col gap-5 items-center" key={index}>
            <img
              src={card.Image}
              alt=""
              className="w-60 h-60 bg-gray-100 tablet:h-40"
            />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
