import { FaArrowRight } from "react-icons/fa6";
import { shopCard } from "../../Utils/Data";

export default function ShopCollection() {
  return (
    <div className="flex flex-col gap-3 items-center p-10">
        <h2 className="font-semibold text-[30px]">Shop Collection</h2>
        <div className="flex flex-row items-center gap-5 mobile:flex-col">
            <div className="flex flex-col bg-gray-100 p-2">
                <img src="/assets/images/ak5-removebg-preview.png" alt="" className="-rotate-12"/>
                <h2 className="font-semibold">AK-47</h2>
                <a href="#" className="underline flex flex-row items-center gap-2">Collection <FaArrowRight /></a>
            </div>
            <div className="flex flex-col gap-5">
                {shopCard.map((card, index) => (
                    <div className="flex flex-row items-center bg-gray-100 p-2" key={index}>
                        <div className="flex flex-col">
                        <h2 className="font-semibold">{card.name}</h2>
                        <a href="#" className="underline flex flex-row items-center gap-2">{card.link}<FaArrowRight /></a>
                        </div>
                        <img src={card.image} alt="" className="h-56 w-60 mobile:h-40" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}