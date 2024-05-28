"use client";

import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const openSidebar = () => setOpen(true);
  const closeSidebar = () => setOpen(false);
  const toggleOpen = () => setOpen((prev) => !prev);

  const pathname = usePathname();
  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      closeSidebar();
    }
  };

  return (
    <div className="sm:hidden">
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button onClick={toggleOpen}>
            <Menu className="relative z-50 h-5 w-5 text-zinc-700" />
          </button>
        </SheetTrigger>
        <SheetContent className="text-left">
          <SheetHeader className="w-full text-left">
            <SheetTitle>Our Services</SheetTitle>
          </SheetHeader>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Services</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3">
                <Link
                  href="/page1"
                  className="border-black border-b w-fit"
                  onClick={() => closeOnCurrent("/page1")}
                >
                  UI/UX Design For Web
                </Link>
                <Link
                  href="/page2"
                  className="border-black border-b w-fit"
                  onClick={() => closeOnCurrent("/page2")}
                >
                  UI/UX Design For Mobile
                </Link>
                <Link
                  href="/page3"
                  className="border-black border-b w-fit"
                  onClick={() => closeOnCurrent("/page3")}
                >
                  Website Development
                </Link>
                <Link
                  href="/page4"
                  className="border-black border-b w-fit"
                  onClick={() => closeOnCurrent("/page4")}
                >
                  Mobile Application Development
                </Link>
                <Link
                  href="/page5"
                  className="border-black border-b w-fit"
                  onClick={() => closeOnCurrent("/page5")}
                >
                  Graphic Design
                </Link>
                <Link
                  href="/page6"
                  className="border-black border-b w-fit"
                  onClick={() => closeOnCurrent("/page6")}
                >
                  Digital Marketing
                </Link>
                <Link
                  href="/page7"
                  className="border-black border-b w-fit"
                  onClick={() => closeOnCurrent("/page7")}
                >
                  Video Editing
                </Link>
                <Link
                  href="/page8"
                  className="border-black border-b w-fit"
                  onClick={() => closeOnCurrent("/page8")}
                >
                  QuickBooks
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-4 flex flex-col gap-4">
            <Link
              href="/about"
              className="border-black border-b w-fit"
              onClick={() => closeOnCurrent("/about")}
            >
              About Us
            </Link>
            <Link
              href="/portfolio"
              className="border-black border-b w-fit"
              onClick={() => closeOnCurrent("/portfolio")}
            >
              Portfolio
            </Link>
            <Link
              href="/careers"
              className="border-black border-b w-fit"
              onClick={() => closeOnCurrent("/careers")}
            >
              Careers
            </Link>
            <Link
              href="/tools"
              className="border-black border-b w-fit"
              onClick={() => closeOnCurrent("/tools")}
            >
              Tools
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
