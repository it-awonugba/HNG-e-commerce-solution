import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import Image from "next/image";

type ImageTextProps = {
  content: {
    image: string;
    subheading: string;
    heading: string;
    paragraph: string;
    userName: string;
    userImage: string;
    userTag: string;
    rating: number;
  };
};

export default function ImageText({ content }: ImageTextProps) {
  return (
    <section className="flex flex-col-reverse xl:flex-row xl:justify-center xl:items-center xl:gap-x-4 xl:px-36">
      <div className="flex flex-col w-full xl:gap-y-4 xl:w-2/3 ">
        <article className="flex flex-col gap-y-4">
          <div className="flex-col gap-y-1">
            <h3 className="text-primary">{content.subheading.toUpperCase()}</h3>
            <h2 className="text-4xl font-bold leading-12 tracking-wide pr-4">
              {content.heading}
            </h2>
          </div>
          <p className="text-lg text-[#585654] flex flex-col gap-y-4">
            {content.paragraph}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <Avatar>
                <AvatarImage src={content.userImage} alt={content.userName} />
                <AvatarFallback>{content.userTag}</AvatarFallback>
              </Avatar>
              <div>
                <div>{content.userName}</div>
                <div>{content.userTag}</div>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="grid grid-cols-5 gap-x-1">
                {Array.from([1, 2, 3, 4]).map((item, index) => (
                  <Image
                    src="/images/star.svg"
                    width={19}
                    height={19}
                    alt="reviews empty"
                    key={index}
                  />
                ))}
                <Image
                  src="/images/starempty.svg"
                  width={19}
                  height={19}
                  alt="reviews empty"
                />
              </div>
              <span>{content.rating}</span>
            </div>
          </div>
        </article>
      </div>
      <div className="rounded-md flex justify-center">
        <Image
          src={content.image}
          width={768}
          height={770}
          alt={content.subheading}
          objectFit="cover"
        />
      </div>
    </section>
  );
}
