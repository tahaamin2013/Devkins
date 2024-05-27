import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const Tools = () => {
  return (
    <div className="flex flex-wrap px-6 justify-center mt-6 w-full">
      <h1 className="text-4xl font-bold">⚒ Devkins Tools</h1>
      <div className="flex flex-wrap px-6 justify-center mt-6 gap-[50px] w-full">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1" // Set defaultValue to "item-1" to open the accordion by default
          className="bg-white rounded-xl p-3 pt-0 border h-fit"
        >
          <AccordionItem value="item-1" className="w-[320px]">
            <AccordionTrigger>
              SEO (Search Engine Optimization) Tools
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1" // Set defaultValue to "item-1" to open the accordion by default
          className="bg-white rounded-xl p-3 pt-0 border h-fit"
        >
          <AccordionItem value="item-1" className="w-[320px]">
            <AccordionTrigger>
              SEO (Search Engine Optimization) Tools
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1" // Set defaultValue to "item-1" to open the accordion by default
          className="bg-white rounded-xl p-3 pt-0 border h-fit"
        >
          <AccordionItem value="item-1" className="w-[320px]">
            <AccordionTrigger>
              SEO (Search Engine Optimization) Tools
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1" // Set defaultValue to "item-1" to open the accordion by default
          className="bg-white rounded-xl p-3 pt-0 border h-fit"
        >
          <AccordionItem value="item-1" className="w-[320px]">
            <AccordionTrigger>
              SEO (Search Engine Optimization) Tools
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1" // Set defaultValue to "item-1" to open the accordion by default
          className="bg-white rounded-xl p-3 pt-0 border h-fit"
        >
          <AccordionItem value="item-1" className="w-[320px]">
            <AccordionTrigger>
              SEO (Search Engine Optimization) Tools
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1" // Set defaultValue to "item-1" to open the accordion by default
          className="bg-white rounded-xl p-3 pt-0 border h-fit"
        >
          <AccordionItem value="item-1" className="w-[320px]">
            <AccordionTrigger>
              SEO (Search Engine Optimization) Tools
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Tools;
