import Menu from "./Menu";
import Link from "next/link";

export default function FeaturedMenu() {
  const menu = [
    {
      id: 1,
      name: "Chief Burger Meal",
      image: "/images/Burger_cart.png",
      price: 38,
      rating: 46,
      discount: "25% off",
      discount_badge: "red",
      preparation_time: "25mins",
      message: "Available for order now",
      message_label: "success",
    },
    {
      id: 9,
      name: "Jollof Rice",
      image: "/images/meal_cart.png",
      price: 38,
      rating: 46,
      discount: "15% off",
      discount_badge: "red",
      preparation_time: "Fast",
      message: "Selling from 12noon WAT",
      message_label: "danger",
    },
    {
      id: 13,
      name: "Salad",
      image: "/images/salad_cart.png",
      price: 38,
      rating: 46,
      discount: "15%",
      discount_badge: "red",
      preparation_time: "25mins",
      message: "Available for order now",
      message_label: "success",
    },
    {
      id: 8,
      name: "Soups",
      image: "/images/soup4.png",
      price: 38,
      rating: 46,
      discount: "15%",
      discount_badge: "red",
      preparation_time: "25mins",
      message: "Selling from 2pm WAT",
      message_label: "danger",
    },
  ];

  return (
    <section className="pt-24 pb-8 px-8 bg-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-sm font-bold lg:text-2xl ">Saved Delicacies</h2>

        <Link href="#" className="px-10 underline text-[#5B5554]">
          see all offers
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-y-8 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:gap-y-16 xl:grid-cols-4 ">
        {menu.map((item) => (
          <Menu {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
