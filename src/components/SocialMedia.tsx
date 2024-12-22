export default function SocialMedia() {
  return (
    <div className="flex flex-col items-center gap-5 mt-10">
      <div className="flex flex-col items-center justify-center gap-3">
        <span className="text-xl font-semibold">NEWSFEED</span>
        <h2 className="text-[15px] font-semibold">Instagram</h2>
        <p className="text-sm">
          Follow us on social media for more discount & promotions
        </p>
        <a href="#">@Buygun_official</a>
      </div>
      <div className="grid gap-0 w-full grid-cols-1 mobile:grid-cols-2 lg:grid-cols-9">
        <img
          src="/assets/images/ak9.jpg"
          alt=""
          className="w-full h-28 object-cover"
        />
        <img
          src="/assets/images/g1.jpg"
          alt=""
          className="w-full h-28 object-cover"
        />
        <img
          src="/assets/images/ak1.jpg"
          alt=""
          className="w-full h-28 object-cover"
        />
        <img
          src="/assets/images/g4.jpg"
          alt=""
          className="w-full h-28 object-cover"
        />
        <img
          src="/assets/images/ak5.jpg"
          alt=""
          className="w-full h-28 object-cover"
        />
        <img
          src="/assets/images/b4.jpg"
          alt=""
          className="w-full h-28 object-cover"
        />
        <img
          src="/assets/images/baretta.jpg"
          alt=""
          className="w-full h-28 object-cover"
        />
        <img
          src="/assets/images/armouredcar.jpg"
          alt=""
          className="w-full h-28 object-cover"
        />
        <img
          src="/assets/images/soldier3.jpg"
          alt=""
          className="w-full h-28 object-cover"
        />
      </div>
    </div>
  );
}
