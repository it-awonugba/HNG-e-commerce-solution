import Image from "next/image";

type SearchItemProp = {
  title: string;
  image: string;
};

export default function SearchItem({ title, image }: SearchItemProp) {
  return (
    <div className="flex flex-col w-max-[13.625rem] items-center rounded-lg">
      <div className="relative w-[13.625rem] h-[13.625rem] mb-4 justify-center items-center overflow-hidden rounded-full lg:w-[10.5rem] lg:h-auto">
        <Image src={image} width={218} height={218} alt={title} />
      </div>
      <h3 className="text-xl font-semibold leading-[2.4rem] text-center">
        {title}
      </h3>
    </div>
  );
}
