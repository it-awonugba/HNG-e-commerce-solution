import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-black px-6 py-4 lg:px-[7.5rem] lg:py-8">
      <section className="grid grid-cols-1 gap-y-12 py-10 xl:grid xl:grid-cols-12 xl:gap-12 ">
        <div className="col-span-3 gap-y-12">
          <Link href="/">
            <Image
              src="/images/bottom_logo.png"
              width={88}
              height={80}
              alt="logo"
              className="h-20 w-[5.5rem]"
            />
          </Link>
          <p className="text-[#fefefd] mt-8">
            From fluffy pastries to delicious meals, we pride ourselves on using
            only the finest ingredients to create mouthwatering masterpieces
            that will tantalize your taste buds.
          </p>
        </div>
        <div className="flex col-span-5 gap-x-10">
          <div className="w-auto">
            <h4 className="text-lg font-bold text-white">Company</h4>
            <ul className="gap-y-4 mt-4 xl:mt-10">
              <li>
                <Link href="" className="link">
                  About us
                </Link>
              </li>
              <li>
                <Link href="" className="link">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="" className="link">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="" className="link">
                  Offers
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-auto">
            <h4 className="text-lg font-bold text-white">Contact</h4>
            <ul className="gap-4 mt-4 xl:mt-10">
              <li>
                <Link href="" className="link">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="" className="link">
                  Partner with us
                </Link>
              </li>
              <li>
                <Link href="" className="link">
                  Ride with us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-auto">
            <h4 className="text-lg font-bold text-white">Legal</h4>
            <ul className="gap-4 mt-4 xl:mt-10">
              <li>
                <Link href="" className="link">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="" className="link">
                  Refunds & Cancellations
                </Link>
              </li>
              <li>
                <Link href="" className="link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="" className="link">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-lg text-[#f5f5f5] opacity-60 mb-4 xl:mb-10">
                FOLLOW US
              </h4>
              <ul className="flex gap-3">
                <li>
                  <Image
                    src="/images/twitter.svg"
                    width={28}
                    height={28}
                    alt="Twitter"
                    className="w-7 h-7"
                  />
                </li>
                <li>
                  <Image
                    src="/images/facebook.svg"
                    width={28}
                    height={28}
                    alt="Facebook"
                    className="w-7 h-7"
                  />
                </li>
                <li>
                  <Image
                    src="/images/instagram.svg"
                    width={28}
                    height={28}
                    alt="Instagram"
                    className="w-7 h-7"
                  />
                </li>
                <li>
                  <Image
                    src="/images/github.svg"
                    width={28}
                    height={28}
                    alt="Github"
                    className="w-7 h-7"
                  />
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <h4 className="text-lg font-bold text-[#f5f5f5] opacity-60 mb-4 xl:mb-10">
                CONTACT US
              </h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/mail.png"
                    width={32}
                    height={32}
                    alt="Email"
                    className="w-6 h-6"
                  />
                  <span className="contact-info text-sm">
                    info@masterchef.com
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/phone.png"
                    width={32}
                    height={32}
                    alt="Phone"
                    className="w-6 h-6"
                  />
                  <span className="contact-info text-sm">+234 81021806</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 space-y-8">
            <p className="text-[#FEFCFA]">
              Receive exclusive offers in your mailbox
            </p>
            <form className="w-full">
              <div className="relative flex items-center">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Image
                    src="/images/envelope.svg"
                    width={24}
                    height={19}
                    alt="mail"
                  />
                </span>
                <input
                  type="email"
                  className="w-2/3 pl-10 pr-4 py-2 mr-[0.8125rem] bg-[#424242] rounded-md shadow-sm focus:outline-none"
                  placeholder="Enter your email"
                />
                <Button className="w-1/3 bg-primary">Subscribe</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="flex flex-col py-14 border-t border-t-[#424242]">
        <h6 className="text-white text-base lg:text-[1.375rem]">
          Our top cities
        </h6>
        <div className="flex justify-between pt-10">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="" className="link">
                Abuja
              </Link>
            </li>
            <li>
              <Link href="" className="link">
                Okene
              </Link>
            </li>
            <li>
              <Link href="" className="link">
                Umuahia
              </Link>
            </li>
            <li>
              <Link href="" className="link">
                Kaduna
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col gap-4">
            <li>
              <Link href="" className="link">
                Enugu
              </Link>
            </li>
            <li>
              <Link href="" className="link">
                Osun
              </Link>
            </li>
            <li>
              <Link href="" className="link">
                Osogbo
              </Link>
            </li>
            <li>
              <Link href="" className="link">
                Portharcourt
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col gap-4">
            <li>
              <Link href="" className="link">
                Lagos
              </Link>
            </li>
            <li>
              <Link href="" className="link">
                Abeokuta
              </Link>
            </li>
            <li>
              <Link href="" className="link">
                Oyo City
              </Link>
            </li>
            <li>
              <Link href="" className="link">
                Ibadan
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col gap-4">
            <li>
              <Link href="" className="link">
                Jos city
              </Link>
            </li>
            <li>
              <Link href="" className="link">
                Niger
              </Link>
            </li>
            <li>
              <Link href="" className="link">
                Calabar
              </Link>
            </li>
            <li>
              <Link href="" className="link">
                Onisha
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <Image
                  src="/images/mail.png"
                  width={32}
                  height={32}
                  alt="Email"
                />
                <span className="contact-info">info@masterchef.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/images/phone.png"
                  width={32}
                  height={32}
                  alt="Phone"
                />
                <span className="contact-info">+234 81021806</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse justify-between items-center border-t-[#E2E8F0] border-t gap-3 w-full py-10  lg:flex-row">
        <p className="text-xs text-[#FFFEFE] md:text-lg md:leading-[1.375rem] md:font-medium">
          &copy; Copyright 2024, All Rights Reserved by Masterchef
        </p>
        <div className="flex flex-start  items-center md:flex-end ">
          <Image
            src="/images/visa.png"
            width={66}
            height={20}
            alt="Visa"
            className="h-5 w-[4.08163rem]"
          />
          <Image
            src="/images/mastercard.png"
            width={41}
            height={24}
            alt="Mastercard"
            className="h-5 w-10"
          />
          <Image
            src="/images/paypal.png"
            width={65}
            height={32}
            alt="Paypal"
            className="h-8 w-16"
          />
        </div>
      </section>
    </footer>
  );
}
