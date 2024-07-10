import Nav from "../Cart/Nav";
import FeaturedMenu from "../Menu/FeaturedMenu";
import Recommendation from "../Recommendation/Recommendation";
import BillingForm from "./BillingForm";
import PaymentSummary from "./PaymentSummary";
import ShippingForm from "./ShippingForm";

export default function Payment() {
  const navOptions = {
    first_title: "Home",
    first_address: "/",
    second_title: "Cart",
    second_address: "/cart",
    third_title: "Checkout",
    third_address: "/checkout",
  };

  return (
    <>
      <section className="space-y-12">
        <Nav {...navOptions} />
        <section className="flex flex-col px-4 py-4 lg:grid lg:grid-cols-12 lg:px-12 lg:py-8 bg-white rounded-lg gap-x-10">
          <div className="w-full space-y-8 flex-row-reverse lg:col-span-8 lg:flex-col">
            <BillingForm />
            <ShippingForm />
          </div>
          <div className="col-span-4 space-y-4 p-3 border rounded-lg xl:p-8">
            <PaymentSummary />
          </div>
        </section>
        <FeaturedMenu />
      </section>
      <div className="mt-2 mb-16">
        <Recommendation />
      </div>
    </>
  );
}
