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
          <AccordionItem value="item-1" className="w-[330px]">
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
          <AccordionItem value="item-1" className="w-[330px]">
            <AccordionTrigger>Converter Tools</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <Link
                href="/tools/number-to-words-converter"
                className="border-b w-fit border-black"
              >
                Number To Words Converter
              </Link>
              <Link
                href="/tools/color-converter"
                className="border-b w-fit border-black"
              >
                Color Converter
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
          <AccordionItem value="item-1" className="w-[330px]">
            <AccordionTrigger>Text Tools</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <Link
                href="/tools/character-counter"
                className="border-b w-fit border-black"
              >
                Character Counter
              </Link>
              <Link
                href="/tools/case-converter"
                className="border-b w-fit border-black"
              >
                Case Converter
              </Link>
              <Link
                href="/tools/reverse-words"
                className="border-b w-fit border-black"
              >
                Reverse Words
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="px-6">
          <h1 className="font-bold text-3xl">Calculators</h1>
          <div className="flex flex-wrap justify-left mt-6 gap-y-[30px] gap-[50px] w-full">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1" // Set defaultValue to "item-1" to open the accordion by default
              className="bg-white rounded-xl p-3 pt-0 border h-fit"
            >
              <AccordionItem value="item-1" className="w-[330px]">
                <AccordionTrigger>Financial Calculators</AccordionTrigger>
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
              <AccordionItem value="item-1" className="w-[330px]">
                <AccordionTrigger>
                  Fitness and Health Calculators
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
              <AccordionItem value="item-1" className="w-[330px]">
                <AccordionTrigger>Math Calculators</AccordionTrigger>
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
              <AccordionItem value="item-1" className="w-[330px]">
                <AccordionTrigger>Other Calculators</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                  <Link
                    href="/tools/age-calculator"
                    className="border-b w-fit border-black"
                  >
                    Age Calculator
                  </Link>
                  <Link
                    href="/tools/random-number-calculator"
                    className="border-b w-fit border-black"
                  >
                    Random Number Generator
                  </Link>
                  <Link
                    href="/tools/ramdom-password-gnenerator"
                    className="border-b w-fit border-black"
                  >
                    Random Password Generator
                  </Link>
                  <Link
                    href="/tools/Simple-Calculator"
                    className="border-b w-fit border-black"
                  >
                    Simple Calculator
                  </Link>
                  <Link
                    href="/tools/FactorCalculator"
                    className="border-b w-fit border-black"
                  >
                    Factor Calculator
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
