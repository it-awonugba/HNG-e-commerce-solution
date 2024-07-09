"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import { useFormatCurrency } from "@/app/_hook/useFormatCurrency";
import { useCart } from "@/app/_context/CartContext";

export type ProductItem = {
  id: number;
  title: string;
  image: string;
  price: number;
};

type ProductProps = {
  item: ProductItem;
};

export default function Product({ item }: ProductProps) {
  const { formatCurrency } = useFormatCurrency();
  const { addProductToCart } = useCart();
  return (
    <Card className="rounded-lg overflow-hidden">
      <div className="relative">
        <Image
          src={item.image}
          alt={item.title}
          width={2000}
          height={1475}
          objectFit="contain"
        />
        <div className="absolute z-20 bottom-0 left-0 p-4 w-full space-y-2  bg-gradient-to-t from-black to-transparent">
          <div className="flex justify-between">
            <h4 className="text-white font-bold">{item.title}</h4>
            <div className="flex justify-end">
              <Link
                href="#"
                className={`w-20 rounded-sm ${badgeVariants({
                  variant: "default",
                })}`}
                onClick={(e) => {
                  e.preventDefault();
                  addProductToCart(item);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Buy
                <Image
                  src="/images/white-shopping-cart.svg"
                  width={19}
                  height={19}
                  alt="Cart icon"
                  className="h-4 w-4 ml-2"
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-between">
            <h4 className="text-accent text-xl font-bold">
              {formatCurrency(item.price)} (per plate)
            </h4>
            <div className="flex justify-end items-center">
              <Link
                href="#"
                className={`w-20 bg-transparent rounded-sm ${badgeVariants({
                  variant: "default",
                })}`}
              >
                <Image
                  src="/images/dollar-square.svg"
                  width={19}
                  height={19}
                  alt="Cart icon"
                  className="h-4 w-4 mr-2 mt-1"
                />

                <span className="text-white">Bargain</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
