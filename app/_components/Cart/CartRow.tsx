"use client";
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
};

export default function CartRow({ setItemId, cartItem }: CartRowProps) {
  const { formatCurrency } = useFormatCurrency();
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1">
        <Checkbox />
      </div>
      <div className="col-span-3">
        <Image
          src={cartItem.image}
          alt={cartItem.title}
          width={200}
          height={200}
        />
      </div>
      <div className="col-span-3 flex flex-col">
        <h3 className="font-bold text-xl">{cartItem.title}</h3>
        <p className="text-[#716F6C]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <section className="flex">
          <Link href="#" className=""></Link>
          <Link href="#" className=""></Link>
        </section>
      </div>
      <div className="col-span-1 flex items-center">
        <Button>
          <Image src="/images/add.svg" width={19} height={19} alt="" /> Toppings
        </Button>
      </div>
      <div className="col-span-2">
        <div className="flex">
          <Link href="#">
            <Image src="/images/add.svg" width={19} height={19} alt="Plus" />
          </Link>
          <input type="text" />
          <Link href="#">
            <Image src="/images/add.svg" width={19} height={19} alt="Plus" />
          </Link>
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <span>{formatCurrency(cartItem.price)}</span>
      </div>
    </div>
  );
}
