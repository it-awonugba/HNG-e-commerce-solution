import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PaymentSummary() {
  return (
    <div>
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
    </div>
  );
}
