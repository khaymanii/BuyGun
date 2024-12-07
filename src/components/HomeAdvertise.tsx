import { FaArrowRight } from "react-icons/fa6";
import VectorImage from "../assets/icons/Vector.svg"
import { FaTimes } from "react-icons/fa";

export default function HomeAdvertise () {
   return ( <div className="bg-green-300 p-2">
        <div className="flex flex-row items-center justify-center gap-3">
            <div className="flex flex-row items-center gap-2">
                <img src={VectorImage} alt="" />
                <span className="text-[12px] text-black font-semibold">30% off storewide — Limited time!</span>
            </div>

            <button className="flex flex-row items-center gap-2 border-black border-b-2 text-[12px] font-semibold">Shop Now < FaArrowRight /></button>
        </div>
        <FaTimes className="absolute right-3 top-3 cursor-pointer" />
    </div>
   )
}