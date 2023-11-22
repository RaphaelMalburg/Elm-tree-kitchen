"use client";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "./ui/sheet";
import { Input } from "./ui/input";
import { toast } from "@/components/ui/use-toast";
import { CheckboxReactHookFormMultiple } from "./PrepList";
import { Switch } from "./ui/switch";
import { prepLists } from "@/data/prepLists";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdChevronLeft } from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <nav className="w-full px-4 pb-6">
        <div className="font-semibold text-center text-lg grid grid-cols-3 justify-between">
          <Link href={"/"}>
            <Image src="/logoelmtree.png " alt="logo" width={150} height={150} />
          </Link>

          <div className="flex justify-center ml-8">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode"></Label>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <div className="flex justify-end w-full">
                <Button variant="outline" className="w-fit block lg:hidden">
                  <IoMenu />
                </Button>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Current List</SheetTitle>
                <SheetDescription>Make changes to your current list. Click save when you&apos;re done.</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4 ">
                <CheckboxReactHookFormMultiple />
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div className="absolute top-10 left-4">
          {pathname === "/" ? (
            ""
          ) : (
            <Link href={"/"}>
              <MdChevronLeft />
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
