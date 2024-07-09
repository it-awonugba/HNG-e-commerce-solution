"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "../_context/CartContext";
export default function Header() {
  const { cart } = useCart();
  return (
    <header className="header">
      <section className="flex">
        <nav className="flex">
          <Link href="/">
            <Image
              src="/images/logo88x80.png"
              width={88}
              height={80}
              alt="Logo"
              className="w-11 h-10 md:w-[5.5rem] md:h-20"
            />
          </Link>
          <ul className="lg:flex hidden justify-end items-center w-[38.9rem] gap-x-3">
            <li>
              <Link href="/" className="px-[2.5rem] text-primary">
                Meals
              </Link>
            </li>
          </ul>
        </nav>

        <div className="gap-x-4 flex items-center ml-auto">
          <Link href="/cart">
            <div className="relative bg-[#F6F6F6] h-6 w-6 rounded-full flex justify-center items-center md:h-16 md:w-16">
              {cart.length > 0 && (
                <span className="absolute top-3 translate-y-[-50%] bg-red-500 text-white text-xs flex items-center justify-center h-5 w-5 rounded-full">
                  {cart.length}
                </span>
              )}
              <Image
                src="/images/shopping-cart.svg"
                width={33}
                height={32}
                alt="Cart"
                className="h-8 w-8"
              />
            </div>
          </Link>
          <Button className="hidden bg-primary w-[3.25rem] xl:rounded-lg xl:h-14 xl:w-[7.3125rem] xl:block">
            <Link href="">Login</Link>
          </Button>
        </div>
      </section>
    </header>
  );
}
