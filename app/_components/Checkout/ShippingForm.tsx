import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ShippingForm() {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="font-bold text-xl">Shipping Address</h3>
        <p className="text-[#3C4242]">
          Select the address that matches your card or payment method.
        </p>
      </div>
      <RadioGroup
        defaultValue="billing"
        className="bg-[#F6F7F9] px-10 py-4 flex-col rounded-lg"
      >
        <div className="flex items-center border-b border-b-[#BEBCBD] space-x-2 py-4">
          <RadioGroupItem value="billing" id="billing" />
          <Label htmlFor="billing">Same as Billing Address?</Label>
        </div>
        <div className="flex items-center space-x-2 py-4">
          <RadioGroupItem value="address" id="address" />
          <Label htmlFor="address">Use a Different Shipping Address</Label>
        </div>
      </RadioGroup>
      <div className="flex justify-end">
        <Button size="lg">Change Address</Button>
      </div>
    </section>
  );
}
