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
      <h1 className="text-4xl font-bold">🛠 Devkins Tools</h1>
      <div className="flex flex-wrap px-6 justify-center mt-6 gap-y-[30px] gap-[50px] w-full">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1" // Set defaultValue to "item-1" to open the accordion by default
          className="bg-white rounded-xl p-3 pt-0 border h-fit"
        >
          <AccordionItem value="item-1" className="w-[350px]">
            <AccordionTrigger>
              SEO (Search Engine Optimization) Tools
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <Link
                href="/uniqe-words-finder"
                className="border-b w-fit border-black"
              >
                Unique Words Finder in Related Keywords
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
          <AccordionItem value="item-1" className="w-[350px]">
            <AccordionTrigger>Simple Tools</AccordionTrigger>
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
          <AccordionItem value="item-1" className="w-[350px]">
            <AccordionTrigger>Modern Tools</AccordionTrigger>
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
          <AccordionItem value="item-1" className="w-[350px]">
            <AccordionTrigger>Mathametics Tools</AccordionTrigger>
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
          <AccordionItem value="item-1" className="w-[350px]">
            <AccordionTrigger>English Tools</AccordionTrigger>
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
          <AccordionItem value="item-1" className="w-[350px]">
            <AccordionTrigger>Example Tools</AccordionTrigger>
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
