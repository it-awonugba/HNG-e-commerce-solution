"use client";
import Image from "next/image";
import Link from "next/link";
import Badge from "../ui/Badge";
import LabelItem from "../ui/LabelItem";
import { Button } from "@/components/ui/button";
import { useFormatCurrency } from "@/app/_hook/useFormatCurrency";
import { useCart } from "@/app/_context/CartContext";

type MenuProps = {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  discount: string;
  discount_badge: string;
  preparation_time: string;
  message: string;
  message_label: string;
};

export default function Menu(props: MenuProps) {
  const { formatCurrency } = useFormatCurrency();
  const { addProductToCart } = useCart();

  return (
    <div>
      <div className="relative mb-3">
        <Image
          src={props.image}
          width={500}
          height={500}
          alt={props.name}
          className="rounded-xl h-60"
        />

        <div className="absolute z-20 top-4 left-6 flex gap-1">
          <Badge
            type={props.discount_badge}
            title={props.discount}
            icon="/images/bookmark.png"
          />
          <Badge
            type="orange"
            title={props.preparation_time}
            icon="/images/clock.png"
          />
        </div>

        <div className="absolute z-20 bottom-4 px-6 w-full flex justify-between items-center">
          <LabelItem type={props.message_label} text={props.message} />
          <Link href="#">
            <Image src="/images/heart.png" width={24} height={25} alt="Heart" />
          </Link>
        </div>
      </div>

      <div className="flex items-center mb-5">
        <h3 className="text-lg font-bold mr-2 text-[#424242] h-5">
          {props.name}
        </h3>
        <div className="flex items-center gap-0">
          <Image
            src="/images/star.png"
            width={25}
            height={24}
            alt="Star"
            className="h-5 w-5"
          />
          <span className="h-5 text-accent2">{props.rating}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">
          {formatCurrency(props.price)}
        </span>
        <Button
          variant="outline"
          size="sm"
          className="text-primary border-primary gap-x-2 h-8"
          onClick={(e) => {
            e.preventDefault();
            addProductToCart({
              id: props.id,
              title: props.name,
              image: props.image,
              price: props.price,
            });
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <span className="text-xs">Add to cart</span>
          <Image
            src="/images/shopping-cart.png"
            alt="Cart icon"
            width={19}
            height={19}
            className="h-4 w-4"
          />
        </Button>
      </div>
    </div>
  );
}
