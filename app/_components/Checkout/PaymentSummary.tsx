"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCartComputation } from "@/app/_hooks/useCartComputation";

export default function PaymentSummary() {
  const { tax, subTotal, total } = useCartComputation();
  return (
    <section>
      <h3 className="font-bold text-xl">Payment Information</h3>
      <div className="border-b border-b-[#E4E7EC] py-8">
        <h4>Apply Discount</h4>
        <div className="flex gap-2">
          <Input />
          <Button variant="ghost" className="bg-[#B3B1B0] text-white">
            Apply
          </Button>
        </div>
      </div>
      <section className="mt-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-xl">Pay With</h3>
          <div className="flex gap-2">
            <Image src="/images/Visa.svg" width={19} height={19} alt="Visa" />
            <Image
              src="/images/Mastercard.svg"
              width={19}
              height={19}
              alt="Mastercard"
            />
            <Image
              src="/images/ShopPay.svg"
              width={19}
              height={19}
              alt="Shop Pay"
            />
          </div>
        </div>

        <RadioGroup defaultValue="card" className="py-4 space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card">Credit or Debit Card</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="delivery" id="delivery" />
            <Label htmlFor="delivery">Pay on Delivery</Label>
          </div>
        </RadioGroup>
      </section>

      <section className="space-y-4">
        <h3 className="font-bold text-lg">Enter Card Information</h3>
        <div>
          <Label>Name on Card</Label>
          <Input
            className="input-class w-full pr-3 pl-3 py-2 border rounded-md focus:outline-none"
            placeholder="Name on card"
          />
        </div>
        <div>
          <Label>Card Number</Label>
          <Input
            className="input-class w-full pr-3 pl-3 py-2 border rounded-md focus:outline-none"
            placeholder="Card Number"
          />
        </div>
        <section className="flex gap-2">
          <div>
            <Label>Expiry Date</Label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Image
                  src="/images/calendar.svg"
                  width={19}
                  height={19}
                  alt="Icon"
                />
              </div>
              <Input
                className="input-class w-full pr-3 pl-3 py-2 border rounded-md focus:outline-none"
                placeholder="Expiry Date"
              />
            </div>
          </div>
          <div>
            <Label>CVV</Label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Image
                  src="/images/lock.svg"
                  width={19}
                  height={19}
                  alt="Icon"
                />
              </div>
              <Input
                className="input-class w-full pr-10 pl-3 py-2 border rounded-md focus:outline-none"
                placeholder="CVV"
              />
            </div>
          </div>
        </section>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between border-t-2 pt-4 mt-8">
          <h3>Subtotal</h3>
          <h3 className="font-bold text-md">{subTotal}</h3>
        </div>
        <div className="flex justify-between">
          <h3>Tax 2%</h3>
          <h3>{tax}</h3>
        </div>
        <div className="flex justify-between">
          <h3>Discount</h3>
          <h3>0.00</h3>
        </div>
        <div className="flex justify-between border-t-2 pt-4">
          <h3 className="font-bold text-md">Total</h3>
          <h3 className="font-bold text-md">{total}</h3>
        </div>
        <div>
          <Button size="lg" className="w-full">
            Pay {total}
          </Button>
        </div>
      </section>
    </section>
  );
}
