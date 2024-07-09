"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export function Slider() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="px-6 py-4 lg:px-[7.5rem] lg:py-5">
      <Carousel setApi={setApi}>
        <CarouselContent className="h-96 xl:h-[36rem]">
          <CarouselItem>
            <div>
              <Image
                src="/images/Slide1.png"
                alt=""
                width={1488}
                height={785}
                className="w-[93rem] h-[36rem] rounded-[1.25rem] object-cover"
              />
              <div className="absolute z-40 inset-0 flex items-center justify-center">
                <div className="text-white text-center px-8 text-[1.75rem] md:text-7xl xl:px-0">
                  Craving Delicious food? <br />
                  <span className="text-[1.75rem] text-accent mr-4 md:text-7xl">
                    Discover
                  </span>
                  the Perfect Dish for You
                </div>
              </div>
              <div className="absolute z-20 inset-0 rounded-[1.25rem] overflow-hidden  h-full w-full bg-black bg-opacity-50"></div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div>
              <Image
                src="/images/Slide1.png"
                alt=""
                width={1488}
                height={785}
                className="w-[93rem] h-[36rem] rounded-[1.25rem] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center text-[1.75rem] md:text-7xl"></div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <Image
                src="/images/Slide1.png"
                alt=""
                width={1488}
                height={785}
                className="w-[93rem] h-[36rem] rounded-[1.25rem] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center text-[1.75rem] md:text-7xl"></div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselDots className="absolute bottom-8 text-center m-auto left-0 right-0" />
        <CarouselPrevious className="hidden left-10 hover:bg-accent hover:text-white focus:text-white focus:bg-accent lg:flex" />
        <CarouselNext className="hidden right-10 hover:bg-accent hover:text-white focus:text-white focus:bg-accent lg:flex" />
      </Carousel>
    </section>
  );
}
