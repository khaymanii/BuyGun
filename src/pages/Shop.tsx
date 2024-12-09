import ShopCard from "../components/ShopCard";

function Shop() {
  return (
    <div>
      {" "}
      <h1 className="font-semibold text-3xl text-center my-8">Shop</h1>
      <div className="bg-gray-200 w-full mb-10">
        <img
          src="/assets/images/g4.jpg"
          alt="gunbg"
          className="w-full sm:h-[500px] h-[300px]"
        />
      </div>
      <div className="">
        <ShopCard />
      </div>
    </div>
  );
}

export default Shop;
