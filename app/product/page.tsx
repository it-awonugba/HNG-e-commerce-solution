"use client";
import { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useFetchProducts } from "@/app/_hooks/useFetchData";
import { useFormatImage } from "@/app/_hooks/useFormatImage";
import { useFormatPrice } from "../_hooks/useFormatPrice";
import { useCart } from "../_context/CartContext";
import { Button } from "@/components/ui/button";

export type ProductPageContentProps = {
  id: string | null;
};

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams!.get("id");

  return (
    <Suspense fallback={<div>...loading</div>}>
      <ProductPageContent id={id} />
    </Suspense>
  );
}

function ProductPageContent({ id }: ProductPageContentProps) {
  const { products, loading, error } = useFetchProducts();
  const { formatImage } = useFormatImage();
  const { formatPrice } = useFormatPrice();
  const { addProductToCart } = useCart();
  const product = products.find((item) => item.id == id);

  if (loading || !product) {
    return <div>...loading</div>;
  }

  return (
    <section className="flex flex-col px-6 py-4 lg:px-[7.5rem] lg:py-8 md:flex-row p-4 gap-4">
      <div className="w-full md:w-1/2">
        <Image
          src={formatImage(product)}
          alt={product.name}
          width={200}
          height={160}
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg font-semibold">{formatPrice(product)}</p>
        <p className="mb-4">{product.description}</p>

        <Button
          onClick={(e) => {
            e.preventDefault();
            addProductToCart(product);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Add to Cart
        </Button>
      </div>
    </section>
  );
}
