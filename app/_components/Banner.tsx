import Image from "next/image";
export default function Banner() {
  return (
    <section className="custom-gradient">
      <Image
        src="/images/advert.png"
        width={6912}
        height={2444}
        alt="Banner"
        className="w-full"
      />
    </section>
  );
}
