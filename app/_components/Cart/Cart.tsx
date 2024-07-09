"use client";
import { useState } from "react";
import FeaturedMenu from "../Menu/FeaturedMenu";
import Recommendation from "../Recommendation/Recommendation";
import Nav from "./Nav";
import CartRow from "./CartRow";
import { useCart } from "@/app/_context/CartContext";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";

export default function Cart() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const { cart, addProductToCart, removeProductFromCart } = useCart();

  const setItemId = (id: number) => {
    setSelectedItems((prev) => [...prev, id]);
  };

  return (
    <>
      <div className="space-y-12">
        <Nav />
        <div className="grid grid-cols-12 px-12 py-8 bg-white rounded-lg">
          <div className="col-span-8 flex justify-between">
            <div className="flex gap-4">
              <Checkbox
                className="h-5 w-5"
                onClick={() => {
                  cart.map((item, index) => setItemId(item.id));
                }}
              />
              <h3 className="font-bold text-lg">Select all items</h3>
            </div>
            <div className="justify-end">
              <Link
                href="#"
                className="flex"
                onClick={() => {
                  selectedItems.map((id, index) => {
                    removeProductFromCart(id);
                  });
                }}
              >
                <Image
                  src="/images/close.svg"
                  width={19}
                  height={19}
                  alt="close"
                />
                <span> Clear Cart</span>
              </Link>
            </div>

            <div>
              {cart.map((row, index) => (
                <CartRow
                  cartItem={row}
                  key={row.id}
                  setItemId={() => setItemId(row.id)}
                />
              ))}
            </div>
          </div>

          <div className="col-span-4 border border-black">2</div>
        </div>
        <FeaturedMenu />
      </div>
      <div className="mt-2 mb-16">
        <Recommendation />
      </div>
    </>
  );
}
