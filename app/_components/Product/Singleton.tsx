"use client";
import { useState } from "react";
import Image from "next/image";

import { useFetchProducts } from "@/app/_hooks/useFetchData";
import { useFormatImage } from "@/app/_hooks/useFormatImage";
import { useFormatPrice } from "@/app/_hooks/useFormatPrice";
import { useCart } from "@/app/_context/CartContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Nav from "../Cart/Nav";

export type SingletonProps = {
  id: string;
};

export default function Singleton({ id }: SingletonProps) {
  const [quantity, setQuantity] = useState(1);
  const { products, loading, error } = useFetchProducts();
  const { formatImage } = useFormatImage();
  const { formatPrice } = useFormatPrice();
  const { addProductToCart, removeProductFromCart } = useCart();
  const product = products.find((item) => item.id == id);

  if (loading || !product || !id) {
    return <div>...loading</div>;
  }

  const navOptions = {
    first_title: "Home",
    first_address: "/",
    second_title: "Menu",
    second_address: "/",
    third_title: product!.name,
    third_address: `/product?id=${product!.id}`,
  };

  return (
    <section className="px-6 py-4 lg:px-[7.5rem] lg:py-8">
      <div className="flex justify-between items-center">
        <Nav {...navOptions} />
        <Button size="lg">Request Bulk Order</Button>
      </div>
      <div className="w-full mb-5 rounded-lg">
        <div className="relative">
          <Image
            src={formatImage(product)}
            alt={product.name}
            width={200}
            height={160}
            priority={true}
            objectFit="cover"
            className="w-full max-h-[40rem] rounded-lg"
          />
        </div>
        <div className="absolute right-40 bottom-8 space-y-4">
          <Image
            src="/images/heart.png"
            alt="heart"
            width={19}
            height={19}
            className="w-8 h-8"
          />
          <Image
            src="/images/share.png"
            alt="heart"
            width={19}
            height={19}
            className="w-8 h-8"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <h1 className="text-3xl font-semibold">{formatPrice(product)}</h1>
        </div>
        <div className="flex justify-between">
          <article>
            <p className="mb-4">{product.description}</p>
          </article>
          <div className="w-auto flex">
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full text-center"
                onClick={(e) => {
                  e.preventDefault();
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                <Image
                  src="/images/Minus.svg"
                  width={16}
                  height={16}
                  alt="Minus"
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                />
              </Link>
              <span className="block text-sm sm:text-base md:text-lg">
                {quantity}
              </span>
              <Link
                href="#"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full text-center text-[#FFF7F3]"
                onClick={(e) => {
                  e.preventDefault();
                  setQuantity(quantity + 1);
                }}
              >
                <Image
                  src="/images/Add-red.svg"
                  width={16}
                  height={16}
                  alt="Plus"
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                />
              </Link>
            </div>
            <Button
              className="space-x-2"
              onClick={(e) => {
                e.preventDefault();
                addProductToCart(product, quantity);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <span>Order Now</span>
              <Image
                src="/images/white-shopping-cart.svg"
                alt="heart"
                width={19}
                height={19}
                className="w-4 h-4"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
