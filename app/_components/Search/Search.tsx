import Image from "next/image";
import SearchItem from "./SearchItem";
import Link from "next/link";
export default function Search() {
  const categories = [
    {
      id: 1,
      title: "Meat",
      image: "/images/Meat.png",
    },
    {
      id: 2,
      title: "Snacks",
      image: "/images/snacks.png",
    },
    {
      id: 3,
      title: "Swallow",
      image: "/images/swallow.png",
    },
    {
      id: 4,
      title: "Meals",
      image: "/images/meals.png",
    },
    {
      id: 5,
      title: "Drinks",
      image: "/images/drinks.png",
    },
    {
      id: 6,
      title: "Soups",
      image: "/images/soups.png",
    },
    {
      id: 7,
      title: "Ice cream",
      image: "/images/soups.png",
    },
  ];
  return (
    <section className="flex flex-col gap-[3.875rem] mt-2 px-6 py-4 lg:px-[7.5rem] lg:py-5">
      <div className="flex flex-col gap-4 lg:justify-between lg:flex-row">
        <h1 className="text-2xl font-bold">Search by Categories</h1>
        <section className="flex items-center gap-1">
          <div className="relative w-full lg:w-[24.6rem]">
            <input
              type="text"
              placeholder="Search for food..."
              className="pl-4 pr-10 py-2 rounded-full w-full border border-[#E7E6E6] bg-[#F9FAFB]"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Image
                src="/images/search.svg"
                width={30}
                height={30}
                className="h-5 w-5 text-gray-400"
                alt="search icon"
              />
            </div>
          </div>
          <Image
            src="/images/filter.svg"
            width={32}
            height={32}
            alt="filter"
            className="w-10 h-10"
          />
        </section>
      </div>

      <div className="flex gap-x-9 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <Link href="#" key={category.id}>
            <SearchItem
              title={category.title}
              image={category.image}
              key={category.id}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
