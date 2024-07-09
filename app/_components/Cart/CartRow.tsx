"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/app/_context/CartContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Product } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useFormatCurrency } from "@/app/_hook/useFormatCurrency";

type CartRowProps = {
  setItemId: (id: number) => void;
  cartItem: Product;
  isSelected: boolean;
};

export default function CartRow({
  setItemId,
  cartItem,
  isSelected,
}: CartRowProps) {
  const { formatCurrency } = useFormatCurrency();
  const [quantity, setQuantity] = useState<number>(cartItem.quantity!);
  const { addProductToCart, removeProductFromCart, cart } = useCart();

  const decrement = (e: React.MouseEvent) => {
    e.preventDefault();
    if (quantity >= 1) {
      addProductToCart(cartItem, -1);
    }
  };

  const increment = (e: React.MouseEvent) => {
    e.preventDefault();
    addProductToCart(cartItem);
  };

  return (
    <div className="py-8 lg:grid lg:grid-cols-12 border-b-2 border-b-[#C9C5C0]">
      <div className="col-span-1">
        <Checkbox
          className="h-5 w-5"
          onClick={() => setItemId(cartItem.id)}
          checked={isSelected}
        />
      </div>
      <div className="col-span-2">
        <Image
          src={cartItem.image}
          alt={cartItem.title}
          width={200}
          height={200}
          className="h-auto max-w-24 rounded-lg"
        />
      </div>
      <div className="col-span-3 flex flex-col">
        <h3 className="font-bold text-xl">{cartItem.title}</h3>
        <p className="text-[#716F6C]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <section className="flex justify-between">
          <Link href="#" className="">
            <Image
              src="/images/heart.png"
              alt="Remove"
              width={19}
              height={19}
              className="w-5 h-5"
            />
          </Link>
          <Link
            href="#"
            className="flex flex-shrink item-center"
            onClick={() => removeProductFromCart(cartItem.id)}
          >
            <Image
              src="/images/close.svg"
              alt="Remove"
              width={19}
              height={19}
              className="w-5 h-5"
            />
            <span>Remove</span>
          </Link>
        </section>
      </div>
      <div className="col-span-2 flex items-center">
        <Button>
          <Image src="/images/add.svg" width={19} height={19} alt="add" />
          Toppings
        </Button>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          <Link
            href="#"
            className="w-6 h-6 rounded-full border border-black text-center"
            onClick={decrement}
          >
            <Image
              src="/images/Minus.svg"
              width={19}
              height={19}
              alt="Minus"
              className="w-4 h-4"
            />
          </Link>
          <span className="h-4 w-4">{quantity}</span>
          <Link
            href="#"
            className="w-6 h-6 rounded-full border border-black text-[#FFF7F3]"
            onClick={increment}
          >
            <Image
              src="/images/Add-red.svg"
              width={19}
              height={19}
              alt="Plus"
              className="w-4 h-4"
            />
          </Link>
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <span>{formatCurrency(cartItem.quantity! * cartItem.price)}</span>
      </div>
    </div>
  );
}
