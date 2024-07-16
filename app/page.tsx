"use client";
import { useState, useEffect } from "react";
import ImageText from "./_components/ImageText/ImageText";
import Products from "./_components/Product/Products";
import Recommendation from "./_components/Recommendation/Recommendation";
import Search from "./_components/Search/Search";
import { Slider } from "./_components/Slider";
import { Progress } from "@/components/ui/progress";

import { data } from "@/data/data";
import { useFetchProducts, Product } from "./_hooks/useFetchData";

export default function Home() {
  const { products, loading, error } = useFetchProducts();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 100 : prevProgress + 10
        );
      }, 500);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
    }
  }, [loading]);

  const collections = [
    "Snacks",
    "Soups",
    "Meat",
    "Meals",
    "Salad",
    "Swallow",
    "Coffee/Tea",
    "Drinks",
    "Ice cream",
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Progress value={progress} className="w-[60%]" />
      </div>
    );
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <main className="flex flex-col">
      <Slider />
      <Search />
      <section className="space-y-8 mt-8 px-6 py-4 lg:px-[7.5rem] lg:py-5">
        <h1 className="text-3xl font-bold">Menu Listing</h1>
        {collections.map((collection, index) => (
          <Products
            title={collection}
            items={products.filter((item: Product) =>
              item.categories.find(
                (cat) => cat.name === collection.toLowerCase()
              )
            )}
            key={collection}
          />
        ))}
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
