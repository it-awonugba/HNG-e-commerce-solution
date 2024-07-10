import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function BillingForm() {
  return (
    <section className="mt-4">
      <h3 className="text-xl font-bold">Billing Details</h3>
      <p className="text-[#3B3533]">
        Enter a billing address for all your purchases and delivery
      </p>
      <div className="grid grid-cols-2 gap-x-8 mt-8">
        <section className="space-y-6">
          <div>
            <Label>Firstname</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Image
                  src="/images/user.svg"
                  width={19}
                  height={19}
                  alt="Icon"
                />
              </div>
              <Input
                className="input-class w-full pr-3 pl-10 py-2 border rounded-md focus:outline-none"
                placeholder="First Name"
              />
            </div>
          </div>
          <div>
            <Label>Street Address</Label>
            <Input
              className="input-class w-full pr-3 pl-3 py-2 border rounded-md focus:outline-none"
              placeholder="Street Address"
            />
          </div>
          <div>
            <Label>State</Label>
            <Input
              className="input-class w-full pr-3 pl-3 py-2 border rounded-md focus:outline-none"
              placeholder="State"
            />
          </div>
          <div>
            <Label>Phone number</Label>
            <Input
              className="input-class w-full pr-3 pl-3 py-2 border rounded-md focus:outline-none"
              placeholder="Phone Number"
            />
          </div>
          <div className="w-full lg:w-auto">
            <Checkbox className="border-input" /> Save my information for a
            faster checkout
          </div>
        </section>
        <section className="space-y-6">
          <div>
            <Label>Last Name</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Image
                  src="/images/user.svg"
                  width={19}
                  height={19}
                  alt="Icon"
                />
              </div>
              <Input
                className="input-class w-full pr-3 pl-10 py-2 border rounded-md focus:outline-none"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div>
            <Label>Area</Label>
            <Input
              className="input-class w-full pr-3 pl-3 py-2 border rounded-md focus:outline-none"
              placeholder="Area"
            />
          </div>
          <div>
            <Label>LGA</Label>
            <Input
              className="input-class w-full pr-3 pl-3 py-2 border rounded-md focus:outline-none"
              placeholder="Local Government Area"
            />
          </div>
          <div>
            <Label>Post Code</Label>
            <Input
              className="input-class w-full pr-3 pl-3 py-2 border rounded-md focus:outline-none"
              placeholder="Post Code"
            />
          </div>

          <div className="pt-10 flex justify-end">
            <Button size="lg">Save Billing Address</Button>
          </div>
        </section>
      </div>
    </section>
  );
}
