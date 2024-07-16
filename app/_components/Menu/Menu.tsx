"use client";
import Image from "next/image";
import Link from "next/link";
import Badge from "../ui/Badge";
import LabelItem from "../ui/LabelItem";
import { Button } from "@/components/ui/button";
import { useCart } from "@/app/_context/CartContext";
import { useFormatPrice } from "@/app/_hooks/useFormatPrice";
import { Product } from "@/app/_hooks/useFetchData";
import { useFormatImage } from "@/app/_hooks/useFormatImage";

type MenuProps = {
  product: Product;
};

type ProductMeta = {
  message: string;
  message_label: string;
  discount?: number;
};

export default function Menu({ product }: MenuProps) {
  const { formatPrice, calculateDiscountPercentage } = useFormatPrice();
  const { addProductToCart } = useCart();
  const { formatImage } = useFormatImage();

  const product_meta: ProductMeta = {
    message: "",
    message_label: "",
  };

  function addMinutesToCurrentTime(minutesToAdd: number): string {
    const currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() + minutesToAdd);
    const resultTime = currentTime.toLocaleTimeString();
    return resultTime;
  }

  if (product.available_quantity) {
    product_meta.message = "Available for order now";
    product_meta.message_label = "success";
    product_meta.discount = calculateDiscountPercentage(product);
  }

  if (!product.available_quantity) {
    product_meta.message = `Selling from ${addMinutesToCurrentTime(45)} WAT`;
    product_meta.message_label = "danger";
    product_meta.discount = calculateDiscountPercentage(product);
  }

  return (
    <div>
      <div className="relative mb-3">
        <Image
          src={formatImage(product)}
          width={500}
          height={500}
          alt={product.name}
          className="rounded-xl h-60"
        />

        <div className="absolute z-20 top-4 left-6 flex gap-1">
          {product_meta.discount && (
            <Badge
              type="red"
              title={`${product_meta.discount}% off`}
              icon="/images/bookmark.png"
            />
          )}
          <Badge type="orange" title={"15mins"} icon="/images/clock.png" />
        </div>

        <div className="absolute z-20 bottom-4 px-6 w-full flex justify-between items-center">
          <LabelItem
            type={product_meta.message_label}
            text={product_meta.message}
          />
          <Link href="#">
            <Image src="/images/heart.png" width={24} height={25} alt="Heart" />
          </Link>
        </div>
      </div>

      <div className="flex items-center mb-5">
        <h3 className="text-lg font-bold mr-2 text-[#424242] h-5">
          {product.name}
        </h3>
        <div className="flex items-center gap-0">
          <Image
            src="/images/star.png"
            width={25}
            height={24}
            alt="Star"
            className="h-5 w-5"
          />
          <span className="h-5 text-accent2">4.8</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">{formatPrice(product)}</span>
        <Button
          variant="outline"
          size="sm"
          className="text-primary border-primary gap-x-2 h-8"
          onClick={(e) => {
            e.preventDefault();
            addProductToCart(product);
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
