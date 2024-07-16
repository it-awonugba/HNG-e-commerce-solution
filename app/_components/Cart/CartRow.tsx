"use client";
import React from "react";
import { useCart, CartItemType } from "@/app/_context/CartContext";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useFormatImage } from "@/app/_hooks/useFormatImage";
import { useFormatPrice } from "@/app/_hooks/useFormatPrice";

type CartRowProps = {
  setItemId: (id: string) => void;
  cartItem: CartItemType;
  isSelected: boolean;
};

export default function CartRow({
  setItemId,
  cartItem,
  isSelected,
}: CartRowProps) {
  const { addProductToCart, removeProductFromCart } = useCart();
  const { formatImage } = useFormatImage();
  const { formatPrice } = useFormatPrice();

  const imageUrl = formatImage(cartItem.product);
  const price = formatPrice(cartItem.product);

  const decrement = () => {
    if (cartItem.quantity > 1) {
      addProductToCart(cartItem.product, -1);
    } else {
      removeProductFromCart(cartItem.id);
    }
  };

  const increment = () => {
    addProductToCart(cartItem.product);
  };

  return (
    <>
      <div className="flex border-b-2 border-b-[#C9C5C0] xl:hidden">
        <div className="p-2 sm:p-3 md:p-4">
          <Checkbox
            className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
            onClick={() => setItemId(cartItem.id)}
            checked={isSelected}
          />
        </div>
        <div className="p-2 sm:p-3 md:p-4 flex flex-col items-center space-y-2">
          <Image
            src={imageUrl}
            alt={cartItem.product.name}
            width={200}
            height={200}
            className="h-auto max-w-12 sm:max-w-16 md:max-w-20 rounded-lg"
          />
          <Link
            href="#"
            className="flex items-center justify-center"
            onClick={() => removeProductFromCart(cartItem.id)}
          >
            <Image
              src="/images/close.svg"
              alt="Remove"
              width={16}
              height={16}
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
            />
            <span className="ml-2 text-xs sm:text-sm md:text-base">Remove</span>
          </Link>
        </div>
        <div className="p-2 sm:p-3 md:p-4">
          <h3 className="font-bold text-xs sm:text-lg md:text-xl">
            {cartItem.product.name}
          </h3>
          <p className="text-[#716F6C] text-xs sm:text-base md:text-lg">
            {cartItem.product.description}
          </p>
          <span className="text-sm sm:text-base md:text-lg">
            {`${price.charAt(0)}${(
              cartItem.quantity * Number(price.slice(1))
            ).toFixed(2)}`}
          </span>
        </div>
        <div className="p-2 sm:p-3 md:p-4 flex flex-col items-center space-y-2">
          <Link href="#" className="p-1 sm:p-2 md:p-3">
            <Image
              src="/images/heart.png"
              alt="Save for later"
              width={16}
              height={16}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          </Link>
          <div className="flex items-center justify-center gap-2">
            <Link
              href="#"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full text-center"
              onClick={(e) => {
                e.preventDefault();
                decrement();
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
              {cartItem.quantity}
            </span>
            <Link
              href="#"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full text-center text-[#FFF7F3]"
              onClick={(e) => {
                e.preventDefault();
                increment();
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
          <Button className="text-xs sm:text-sm md:text-base" size="sm">
            <Image
              src="/images/add.svg"
              width={16}
              height={16}
              alt="add"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
            Toppings
          </Button>
        </div>
      </div>

      <div className="hidden gap-0 border-b-2 border-b-[#C9C5C0] xl:grid xl:grid-cols-12 pb-2">
        <div className="col-span-1 flex items-center justify-center">
          <Checkbox
            className="h-5 w-5"
            onClick={() => setItemId(cartItem.id)}
            checked={isSelected}
          />
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={cartItem.product.name}
            width={200}
            height={200}
            className="h-auto max-w-24 rounded-lg"
          />
        </div>
        <div className="col-span-3 flex flex-col justify-center">
          <h3 className="font-bold text-xl">{cartItem.product.name}</h3>
          <p className="text-[#716F6C] hidden lg:block">
            {cartItem.product.description}
          </p>
          <div className="flex justify-between pr-4 mt-4 lg:mt-0">
            <Link href="#" className="">
              <Image
                src="/images/heart.png"
                alt="Save for later"
                width={19}
                height={19}
                className="w-5 h-5"
              />
            </Link>
            <Link
              href="#"
              className="flex flex-shrink-0 items-center justify-center"
              onClick={() => removeProductFromCart(cartItem.id)}
            >
              <Image
                src="/images/close.svg"
                alt="Remove"
                width={19}
                height={19}
                className="w-5 h-5"
              />
              <span className="ml-2">Remove</span>
            </Link>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center mt-4">
          <Button>
            <Image src="/images/add.svg" width={19} height={19} alt="add" />
            Toppings
          </Button>
        </div>
        <div className="col-span-2 flex items-center justify-center mt-4">
          <div className="flex items-center justify-center gap-2">
            <Link
              href="#"
              className="w-6 h-6 rounded-full text-center"
              onClick={(e) => {
                e.preventDefault();
                decrement();
              }}
            >
              <Image
                src="/images/Minus.svg"
                width={19}
                height={19}
                alt="Minus"
                className="w-4 h-4"
              />
            </Link>
            <span className="h-7 w-5 block">{cartItem.quantity}</span>
            <Link
              href="#"
              className="w-6 h-6 rounded-full text-center text-[#FFF7F3]"
              onClick={(e) => {
                e.preventDefault();
                increment();
              }}
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
          <span>{`${price.charAt(0)}${(
            cartItem.quantity * Number(price.slice(1))
          ).toFixed(2)}`}</span>
        </div>
      </div>
    </>
  );
}
