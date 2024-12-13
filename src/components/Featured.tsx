import { featuredCard } from "../../Utils/Data";

export default function Featured (){
    return (
        <div className="flex flex-col gap-4 mt-10 mb-10">
            <div className="flex flex-row justify-between px-16 items-center">
                <h2 className="font-semibold text-3xl">Featured</h2>
                <img src="/assets/icons/Navigation Dots.svg" alt="" className="cursor-pointer" />
            </div>
            <div className="flex flex-row items-center gap-5 justify-between px-16 mobile:grid mobile:grid-cols-2 mobile:px-4">
               {featuredCard.map((card, index) => (
               <div className="flex flex-col bg-white rounded-lg shadow-md p-4" key={index}>
                     <div className="relative flex flex-col items-center">
                  <img
                     src={card.image}
                   alt=""
                   className="h-60 w-full object-cover bg-gray-100 rounded-md mobile:h-40"
                     />
        <span className="absolute top-2 left-2 bg-white text-black px-2 text-sm rounded">
          {card.span}
        </span>
        <button className="absolute bottom-4 left-4 bg-black text-white px-6 py-2 rounded-md opacity-90 mobile:px-2 mobile:py-2">
          {card.button}
        </button>
      </div>
      <div className="flex flex-col items-start mt-4">
        <img src={card.rate} alt="" className="w-20" />
        <h2 className="font-semibold text-lg text-gray-800">{card.name}</h2>
        <p className="text-gray-600 text-sm">{card.description}</p>
        <span className="font-bold text-gray-900 mt-2">{card.price}</span>
      </div>
    </div>
  ))}
</div>

        </div>
    )
}