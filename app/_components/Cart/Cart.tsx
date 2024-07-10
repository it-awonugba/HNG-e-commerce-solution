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
import { Product } from "@/data/data";
import { Button } from "@/components/ui/button";
import { useFormatCurrency } from "@/app/_hook/useFormatCurrency";

export default function Cart() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const { cart, removeProductFromCart } = useCart();
  const { formatCurrency } = useFormatCurrency();
  const setItemId = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === cart.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cart.map((item) => item.id));
    }
  };

  const calculateTax = () => {
    return cart.length > 0
      ? formatCurrency(
          (2 / 100) *
            cart.reduce((total, item) => total + item.price * item.quantity!, 0)
        )
      : formatCurrency(0);
  };

  const calculateSubTotal = () => {
    return cart.length > 0
      ? formatCurrency(
          cart.reduce((total, item) => total + item.price * item.quantity!, 0)
        )
      : formatCurrency(0);
  };

  const calculateFinalTotal = () => {
    const total =
      cart.reduce((total, item) => total + item.price * item.quantity!, 0) +
      calculateTax();
    return parseInt(total) + parseInt(total) * (2 / 100);
  };
  const navOptions = {
    first_title: "Home",
    first_address: "/",
    second_title: "Menu",
    second_address: "/",
    third_title: "Cart",
    third_address: "/cart",
  };

  return (
    <>
      <div className="space-y-12">
        <Nav {...navOptions} />
        <div className="flex flex-col px-4 py-4 lg:grid lg:grid-cols-12 lg:px-12 lg:py-8 bg-white rounded-lg">
          <div className="w-full lg:col-span-8">
            <div className="flex px-4 pb-8 justify-between">
              <div className="justify-between items-center flex gap-1">
                <Checkbox
                  className="h-5 w-5"
                  onClick={handleSelectAll}
                  checked={
                    selectedItems.length === cart.length && cart.length > 0
                  }
                />
                <h3 className="text-nowrap font-bold text-xs lg:text-lg">
                  Select all items
                </h3>
                <span className="text-xs w-4 h-4 bg-primary text-white  rounded-full text-center lg:h-6 lg:w-6 lg:text-lg">
                  {selectedItems.length}
                </span>
              </div>
              <div className="w-auto flex justify-end">
                <Link
                  href="#"
                  className="flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    selectedItems.forEach((id) => {
                      removeProductFromCart(id);
                    });
                    setSelectedItems([]);
                  }}
                >
                  <Image
                    src="/images/close.svg"
                    width={19}
                    height={19}
                    alt="close"
                  />
                  <span className="text-primary text-xs lg:text-lg">
                    Clear Cart
                  </span>
                </Link>
              </div>
            </div>

            <div className="px-4 gap-4">
              {cart.map((row: Product) => (
                <CartRow
                  cartItem={row}
                  key={row.id}
                  setItemId={setItemId}
                  isSelected={selectedItems.includes(row.id)}
                />
              ))}
            </div>
          </div>

          <div className="col-span-4 space-y-4 p-3 border rounded-lg xl:p-8">
            <div className="border-b-2">
              <h3 className="text-2xl font-bold text-center">Cart Summary</h3>
            </div>
            <div className="flex justify-between">
              <h3>Subtotal</h3>
              <h3>{calculateSubTotal()}</h3>
            </div>
            <div className="flex justify-between">
              <h3>Tax 2%</h3>
              <h3>{calculateTax()}</h3>
            </div>
            <div className="flex justify-between">
              <h3>Delivery</h3>
              <h3>free</h3>
            </div>
            <div className="flex justify-between border-t-2 pt-4">
              <h3>Total</h3>
              <h3>{formatCurrency(calculateFinalTotal())}</h3>
            </div>
            <div className="space-y-4">
              <Button className="w-full">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button className="w-full" variant="inverted">
                Pair Delivery with other users
              </Button>
            </div>
            <div>
              <p className="font-bold">Return Policy</p>
              <span className="font-normal text-xs">
                returning an item is very easy. read details here
              </span>
            </div>
          </div>
        </div>
        <FeaturedMenu />
      </div>
      <div className="mt-2 mb-16">
        <Recommendation />
      </div>
    </>
  );
}
