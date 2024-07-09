import Link from "next/link";
import Offer from "./Offer";

export default function Recommendation() {
  const recommendation = [
    {
      tag: "Fries",
      title: "Chicken Wings with Chips",
      discount: 20,
      image: "/images/offer3.png",
    },
    {
      tag: "Vegies",
      title: "Spaggetti with Salad",
      discount: 20,
      image: "/images/offer1.png",
    },
    {
      tag: "Rice",
      title: "Chinese Rice",
      discount: 20,
      image: "/images/offer2.png",
    },
  ];

  return (
    <section className="flex flex-col gap-3 mt-12">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold">Recommended Offers</h2>
        <Link href="#" className="underline">
          See all offers
        </Link>
      </div>
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory">
        {recommendation.map((item, index) => (
          <Link
            href="#"
            key={item.title}
            className="snap-x flex-shrink-0 w-full md:w-1/3 md:flex-shrink"
          >
            <Offer {...item} />
          </Link>
        ))}
      </div>
    </section>
  );
}
