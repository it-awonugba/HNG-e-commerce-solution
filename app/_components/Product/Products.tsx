import Link from "next/link";
import Image from "next/image";
import Product, { ProductItem } from "./Product";

type ProductsProp = {
  items: ProductItem[];
  title: string;
};
export default function Products({ items, title }: ProductsProp) {
  return (
    <div className="grid grid-cols-1">
      <div>
        <div className="flex justify-between">
          <h3 className="text-xl text-[#5B5554] font-bold">{title}</h3>
          <Link href="/meals" className="flex items-center gap-1">
            <span>see all</span>
            <Image
              src="/images/black-arrow-right.svg"
              width={19}
              height={19}
              alt="Arrow Icon"
            />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-8 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:gap-y-16 xl:grid-cols-4 ">
        {items.map((item, index) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
