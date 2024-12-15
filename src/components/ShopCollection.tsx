import { shopCard } from "../../Utils/Data";

export default function ShopCollection() {
  return (
    <div className="flex flex-col gap-6 items-center p-5 sm:p-10">
      {/* Header */}
      <h2 className="font-semibold text-2xl sm:text-3xl text-center">
        Shop Collection
      </h2>

      {/* Shop Collection Content */}
      <div className="flex flex-col sm:flex-row items-center gap-8">
        {/* Main Image Section */}
        <div className="flex flex-col bg-gray-100 p-4 rounded-md sm:w-[500px] md:w-[600px]">
          <img
            src="/assets/images/ak5-removebg-preview.png"
            alt=""
            className="-rotate-12 object-cover"
          />
          <h2 className="font-semibold p-2 text-lg sm:text-xl text-center">
            AK-47
          </h2>
        </div>

        {/* Shop Card List */}
        <div className="flex flex-col gap-4 w-full sm:w-auto">
          {shopCard.map((card, index) => (
            <div
              className="flex flex-col sm:flex-row items-center bg-gray-100 p-3 rounded-md"
              key={index}
            >
              <div className="flex flex-col text-center sm:text-left">
                <h2 className="font-semibold text-base sm:text-lg">
                  {card.name}
                </h2>
              </div>
              <img
                src={card.image}
                alt=""
                className="h-40 w-full sm:h-48 sm:w-48 object-cover rounded-md mt-3 sm:mt-0 sm:ml-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
