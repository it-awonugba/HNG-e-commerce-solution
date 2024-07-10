import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PaymentSummary() {
  return (
    <div>
      <h3 className="font-bold text-xl">Payment Information</h3>
      <div>
        <h4>Apply Discount</h4>
        <div className="flex gap-2">
          <Input /> <Button variant="ghost">Apply</Button>
        </div>
      </div>
    </div>
  );
}
