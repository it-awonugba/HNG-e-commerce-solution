import { badgeVariants } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";

type OfferProps = {
  tag: string;
  title: string;
  discount: number;
  image: string;
};

export default function Offer({ tag, title, discount, image }: OfferProps) {
  return (
    <Card className="relative rounded-lg overflow-hidden">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute top-0 right-0">
          <span
            className={`bg-primary text-white py-2 rounded-bl-lg rounded-none ${badgeVariants(
              {
                variant: "default",
              }
            )}`}
          >
            -{discount}%
          </span>
        </div>
        <div className="absolute bottom-0 w-full h-full p-4 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
          <span className="text-accent">{tag}</span>
          <h4 className="text-white text-md font-bold">{title}</h4>
        </div>
      </div>
    </Card>
  );
}
