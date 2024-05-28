"use client";
import React, { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Check } from "lucide-react";

const WebsiteDevlopment = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div>
      <div className="text-white text-center py-24 bg-[url('/_8a0faa67-63da-4d5b-9265-7367a2f5cf56.jpg')] bg-cover bg-no-repeat bg-center">
        <h1 className="font-bold text-6xl md:text-7xl mb-4">Web Devlopment</h1>
        <p className="text-md">
          Encompasses building and maintaining websites, including front-end
          (user interface) and back-end (server-side) <br /> development.
        </p>
      </div>
      <div>
        <div className="mt-8 px-6 md:px-[70px]">
          <h1 className="font-bold text-4xl mb-2">Service Description</h1>
          <p
            className="mb-1
          text-zinc-400 font-bold"
          >
            We offer Web Development Services to businesses of all sizes to give
            them a boost.
          </p>
          <p
            className="mb-1
          text-zinc-400 font-bold"
          >
            Web development involves a range of tasks, it involves a range of
            tasks, including designing the user interface, developing the
            back-end functionality, and ensuring that <br /> the website or web
            app is responsive and user-friendly.
          </p>
          <p
            className="mb-1
          text-zinc-400 font-bold"
          >
            Web development encompasses both the visual aspects of a website and
            its underlying technical infrastructure.
          </p>
        </div>
        <div className="mt-[40px] flex flex-col md:flex-row px-6 sm:px-[70px]">
          <Image
            src="/6601698cb7dff0363a482d7d_Web Development Service-p-800.webp"
            alt=""
            className="rounded-2xl object-cover w-[500px] h-[400px]"
            width={700}
            height={900}
          ></Image>
          <div className="flex flex-col gap-[30px] ml-5">
            <div className="border-b flex gap-3 font-bold border-zinc-500 text-xl pb-4 items-center">
              <div className="text-white rounded-full text-center h-fit w-fit bg-primary p-1">
                <Check size={16} />
              </div>
              Front-end Development
            </div>
            <div className="border-b flex gap-3 font-bold border-zinc-500 text-xl pb-4 items-center">
              <div className="text-white rounded-full text-center h-fit w-fit bg-primary p-1">
                <Check size={16} />
              </div>
              Back-end Development
            </div>
            <div className="border-b flex gap-3 font-bold border-zinc-500 text-xl pb-4 items-center">
              <div className="text-white rounded-full text-center h-fit w-fit bg-primary p-1">
                <Check size={16} />
              </div>
              Content Management System (CMS) Integration
            </div>
            <div className="border-b flex gap-3 font-bold border-zinc-500 text-xl pb-4 items-center">
              <div className="text-white rounded-full text-center h-fit w-fit bg-primary p-1">
                <Check size={16} />
              </div>
              E-commerce Features
            </div>
            <div className="border-b flex gap-3 font-bold border-zinc-500 text-xl pb-4 items-center">
              <div className="text-white rounded-full text-center h-fit w-fit bg-primary p-1">
                <Check size={16} />
              </div>
              Responsive Design
            </div>
          </div>
        </div>
      </div>
      <div className="px-[50px] mt-6">
        <h1 className="font-bold text-4xl">Benefits</h1>
        <ol className="mt-2 flex flex-col gap-4">
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">
                Tailored to Specific Needs:
              </span>{" "}
              Custom software is designed to address your organization&lsquo;s
              unique requirements and challenges, ensuring a <br />
              perfect fit for your operations.
            </p>
          </li>
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">Enhanced Efficiency:</span> Custom
              solutions streamline processes, automate tasks, and eliminate
              inefficiencies, boosting <br /> productivity and reducing manual
              work.
            </p>
          </li>
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">Scalability:</span> As your business
              grows, custom software can easily adapt and scale to accommodate
              increased data, users, and functionality.
            </p>
          </li>
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">Cost Savings:</span> While the initial
              investment may be higher, custom software often leads to long-term
              cost savings by reducing the need <br /> for multiple third-party
              applications and licenses.
            </p>
          </li>
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">Competitive Advantage:</span> Custom
              software can provide a competitive edge by enabling innovation,
              quicker response to market changes, <br />
              and differentiation from competitors.
            </p>
          </li>
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">Data Security:</span> You have control
              over security measures, ensuring that sensitive data is protected
              according to your organization&lsquo;s <br /> standards and
              compliance requirements.
            </p>
          </li>
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">Integration:</span> Custom software
              can be seamlessly integrated with existing systems and
              applications, optimizing data flow and <br /> reducing data silos.
            </p>
          </li>
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">Maintenance and Support:</span> You
              have the flexibility to choose ongoing maintenance and support
              options, ensuring that your software remains <br /> up-to-date and
              functional.
            </p>
          </li>
        </ol>
      </div>
      <div className="px-7 md:px-[90px] mt-7 bg-[#2e1555] pt-[10px] pb-4 text-white text-center">
        <div className="flex flex-col md:flex-row mt-[40px] justify-between">
          <div className="text-left flex mb-5 flex-col justify-center">
            <h1 className="font-bold text-4xl md:text-6xl mb-3 md:mb-5">
              Working process
            </h1>
            <p className="text-sd md:text-lg">
              Our IT consulting process is a systematic journey comprising four
              stages: Assessment and Analysis, Planning, Implementation and
              Execution, and Monitoring and Optimization.
            </p>
          </div>
          <div className="flex gap-[30px] flex-col">
            <div className="flex flex-col md:flex-row gap-1 md:gap-9">
              <div className="flex flex-col w-[300px] px-9 h-[290px]  justify-center items-center rounded-full border border-white">
                <div className="bg-[#9159eb] opacity-[.24] rounded-full w-[300px] h-[300px] absolute  blur-2xl"></div>

                <h1 className="font-bold text-6xl mb-3">01</h1>
                <h1 className="font-bold text-2xl mb-4">
                  Analysis and Planning
                </h1>
                <p className="text-sm">
                  The process begins by thoroughly understanding the client
                  &lsquo;s objectives.
                </p>
              </div>
              <div className="flex flex-col ml-[30px] md:ml-0 mt-[30px] w-[300px] px-9 h-[290px]  justify-center items-center rounded-full border border-white">
                <div className="bg-[#9159eb] opacity-[.24] rounded-full w-[300px] h-[300px] absolute  blur-2xl"></div>

                <h1 className="font-bold text-6xl mb-3">02</h1>
                <h1 className="font-bold text-2xl mb-4">
                  Current State Evaluation
                </h1>
                <p className="text-sm">
                  Assess the client &lsquo;s existing IT infrastructure,
                  systems, and processes
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-1 md:gap-9">
              <div className="flex flex-col w-[300px] px-9 h-[290px]  justify-center items-center rounded-full border border-white">
                <div className="bg-[#9159eb] opacity-[.24] rounded-full w-[300px] h-[300px] absolute  blur-2xl"></div>

                <h1 className="font-bold text-6xl mb-3">03</h1>
                <h1 className="font-bold text-2xl mb-4">
                  Implementation and Execution
                </h1>
                <p className="text-sm">
                  Execute the project plan, which may involve deploying new
                  software, hardware, or IT processes.
                </p>
              </div>
              <div className="flex flex-col mt-[30px] ml-[30px] md:ml-0 w-[300px] px-9 h-[290px]  justify-center items-center rounded-full border border-white">
                <div className="bg-[#9159eb] opacity-[.24] rounded-full w-[300px] h-[300px] absolute  blur-2xl"></div>

                <h1 className="font-bold text-6xl mb-3">04</h1>
                <h1 className="font-bold text-2xl mb-4">Apply</h1>
                <p className="text-sm">
                  In this first step, you apply for the current opportunity{" "}
                  available by attaching an attention-grabbing resume,
                  portfolio, and cover letter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-[70px] mt-5 flex flex-col md:flex-row gap-8">
        <div>
          <h1 className="font-bold text-5xl my-4 mb-8">Our latest projects</h1>
          <button className="group text-white bg-primary hover:border-2 hover:bg-transparent transition-all duration-300 hover:border-primary w-fit justify-between  hover:text-black rounded-full px-5 py-4 flex items-center gap-9 font-bold">
            Learn More
            <div className="mt-0.5 p-1 bg-white rounded-full group-hover:bg-black transition-all duration-300"></div>
          </button>
        </div>
        <div>
          <Carousel
            onMouseEnter={plugin.current.stop}
            plugins={[plugin.current]}
            onMouseLeave={plugin.current.reset}
            className="w-full max-w-5xl text-black mt-7"
          >
            <CarouselContent className="-ml-1 ">
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>{" "}
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>{" "}
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>{" "}
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>{" "}
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>{" "}
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>{" "}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block ml-4 pl-1" />
            <CarouselNext className="hidden md:block mr-5 pl-1" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevlopment;
