"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRef } from "react";

const Career = () => {
  const plugin = useRef(Autoplay({ delay: 2000 }));
  return (
    <div>
      <section className="grid transition-all duration-500 items-center grid-cols-1 md:grid-cols-2 justify-center px-[70px]">
        <div>
          <h1 className="text-4xl md:text-6xl text-[#1a0e2e] font-bold">
            Achieve Your Professional Goals with Webkin Guru
          </h1>
          <p className="mt-4 text-zinc-400 text-md md:text-lg  font-semibold	">
            Value-based upscaling is at the heart of Webkin Guru’s work
            environment. From learning to implementation, our developers and
            tech experts stay ahead in their professional game.
          </p>
          <div className="flex-col md:flex-row flex gap-7 mt-6">
            <button className="bg-primary hover:bg-transparent hover:text-black hover:border hover:border-primary transition-all duration-500 text-white font-bold px-5 py-4 rounded-full">
              Software Devlopment Roles
            </button>
            <button
              className="bg-transparent transition-all duration-500 text-black border border-primary hover:bg-primary
             hover:text-white font-bold px-5 py-4 rounded-full"
            >
              All Other Opportunities
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <Image width={400} height={500} src="/tahacarear.png" alt=""></Image>
        </div>
      </section>
      <div className="bg-white px-4 border shadow-md flex items-center justify-center">
        <Carousel className="h-fit" plugins={[plugin.current]}>
          <CarouselContent className="-ml-1 h-fit">
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={500}
                height={10}
                className="w-[500px]"
                src="/6606d86ab918a52a500e2d84_Redrover Logo.webp "
                alt=""
              />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={500}
                height={10}
                className="w-[500px]"
                src="/6606d86ae6d44cc29ad852a0_Kallidus Logo.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={500}
                height={10}
                className="w-[500px]"
                src="/6606d869e6d44cc29ad8518c_Engage Logo.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={500}
                height={10}
                className="w-[500px]"
                src="/6606d8695d5233bc7852a42b_Dealty Logo.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={500}
                height={10}
                className="w-[500px]"
                src="/6606d869144e68deb59e9aca_Al Ghurair Logo.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={500}
                height={10}
                className="w-[500px]"
                src="/letsremotify.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={500}
                height={10}
                className="w-[500px]"
                src="/predictview.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={500}
                height={10}
                className="w-[500px]"
                src="/RMIInsights.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={500}
                height={10}
                className="w-[500px]"
                src="/Terrascope.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image width={500} height={10} src="/Zoopa.webp" alt=""></Image>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="px-[50px]">
        <section className="justify-center flex flex-col items-center my-4 ">
          <h1 className="font-bold text-4xl text-center">
            It’s Time to Amplify Your <br /> Career
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-7 justify-center items-center mt-4">
            <div className="bg-[#1e0a3f] text-white px-7 py-4  rounded-xl flex flex-col gap-4 h-full">
              <h1 className="font-bold text-2xl">
                Flexible Work <br /> Scheduling
              </h1>
              <p>
                We focus on adaptable hours for <br /> balancing productivity
                and work life.
              </p>
            </div>
            <div className="bg-[#1e0a3f] text-white px-7 py-4  rounded-xl flex flex-col gap-4 h-full">
              <h1 className="font-bold text-2xl">
                Networking <br /> Meetups
              </h1>
              <p>
                Our seminars and meetups cultivate <br /> professional
                connections for growth.
              </p>
            </div>
            <div className="bg-[#1e0a3f] text-white px-7 py-4  rounded-xl flex flex-col gap-4 h-full">
              <h1 className="font-bold text-2xl">
                Wellness <br /> Programs
              </h1>
              <p>
                These aid in nurturing employee health, <br /> vitality, and a
                thriving culture.
              </p>
            </div>
            <div className="bg-[#1e0a3f] text-white px-7 py-4  rounded-xl flex flex-col gap-3">
              <h1 className="font-bold text-2xl">
                Skill Development <br /> Opportunities
              </h1>
              <p>
                Such opportunities fuel continuous <br /> growth, empowering
                individuals for future <br /> success.
              </p>
            </div>
            <div className="bg-[#1e0a3f] text-white px-7 py-4  rounded-xl flex flex-col gap-4 h-full">
              <h1 className="font-bold text-2xl">
                Monetary <br /> Perks
              </h1>
              <p>
                Benefits like leave encashment, paid time <br /> off, and more
                let you relax without worry.
              </p>
            </div>
            <div className="bg-[#1e0a3f] text-white px-7 py-4  rounded-xl flex flex-col gap-4 h-full">
              <h1 className="font-bold text-2xl">
                Fun-Loving <br /> Activities
              </h1>
              <p>
                Our fun and intellectual-based clubs focus <br /> on
                mind-refreshing activities every week.
              </p>
            </div>
          </div>
        </section>
      </div>



      
    </div>
  );
};

export default Career;
