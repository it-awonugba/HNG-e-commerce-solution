"use client";
import { useFetchProducts } from "@/app/_hooks/useFetchData";
import Menu from "./Menu";
import Link from "next/link";

export default function FeaturedMenu() {
  const { products, loading, error } = useFetchProducts();

  const menu = products.filter((item) =>
    item.categories.find((category) => category.name == "featured")
  );

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
          <Menu product={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
