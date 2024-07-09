"use client";
import { useCart } from "@/app/_context/CartContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Product } from "@/data/data";
import Link from "next/link";

type CartRowProps = {
  setItemId: (id: number) => void;
  cartItem: Product;
};

export default function CartRow({ setItemId, cartItem }: CartRowProps) {

  return (
    <div>
      
    </div>
  );
}
