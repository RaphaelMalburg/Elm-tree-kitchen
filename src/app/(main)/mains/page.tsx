"use client";
import React from "react";
import { passList } from "@/data/passList";
import { TaskListCheckBox } from "@/components/Tasklist";
import { Checkboxlist } from "@/components/checkboxList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Checklist from "@/components/Checklist";
import { useCurrentList } from "@/store/currentList";
import { Badge } from "@/components/ui/badge";
import { IoTrashBinOutline } from "react-icons/io5";
import { Dialog } from "@/components/ui/dialog";

export default function Mains() {
  const [store, addToCart, removeFromList, clearList] = useCurrentList((state) => [state.currentList, state.addToList, state.removeFromList, state.clearList]);
  return (
    <div className="w-full ">
      <h1 className="pt-4 text-2xl font-medium text-center ">Mains</h1>
      <div className="grid gap-4 py-4 ">
        <div className="flex items-center space-x-2 w-full flex-col gap-10">
          <h1 className="pt-8 text-lg font-medium">Prep. Lists Elm Tree Kitchen</h1>
          <Checklist />
        </div>
        <div className="w-full grid  px-10  ">
          <h1 className="pt-8 text-lg font-medium text-center">Current List</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {store.map((item) => (
              <div key={item} className="flex justify-between w-full mx-auto bg-slate-100 px-4 py-2 gap-2">
                <Dialog>{item} </Dialog>
                <Badge onClick={() => removeFromList(item)} className=" max-h-5">
                  <IoTrashBinOutline />
                </Badge>
              </div>
            ))}
          </div>
          <Button variant={"destructive"} onClick={() => clearList()} className="w-fit gap-2  text-xs my-10 ">
            Clear All <IoTrashBinOutline />
          </Button>
        </div>
      </div>
    </div>
  );
}
