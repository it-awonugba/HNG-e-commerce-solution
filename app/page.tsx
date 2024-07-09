import Banner from "./_components/Banner";
import ImageText from "./_components/ImageText/ImageText";
import Products from "./_components/Product/Products";
import Recommendation from "./_components/Recommendation/Recommendation";
import Search from "./_components/Search/Search";
import { Slider } from "./_components/Slider";
import { data } from "@/data/data";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Slider />
      <Search />
      <section className="space-y-8 mt-8 px-6 py-4 lg:px-[7.5rem] lg:py-5">
        <h1 className="text-3xl font-bold">Menu Listing</h1>
        <Products title="Snacks" items={data.snacks} />
        <Products title="Soups" items={data.soups} />
        <Products title="Meals" items={data.meals} />
        <Products title="Salad" items={data.salad} />
      </section>
      <section className="px-6 py-4 lg:px-[7.5rem] lg:py-5">
        <Recommendation />
      </section>
      <section className="px-6 py-4 lg:px-[7.5rem] lg:py-5">
        <ImageText content={data.ImageText} />
      </section>
    </main>
  );
}
