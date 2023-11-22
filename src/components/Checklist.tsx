"use client";
import React from "react";
import { Button } from "./ui/button";
import { passList } from "@/data/passList";
import { fridge1, walkIn, dry } from "@/data/listPass";
import { Checkboxlist } from "./checkboxList";
import { prepListType } from "@/types/global";
export default function Checklist() {
  const [checked, setChecked] = React.useState("");

  let data: prepListType[] = [];

  if (checked === "fridge1") {
    data = fridge1;
  } else if (checked === "walkIn") {
    data = walkIn;
  } else if (checked === "dry") {
    data = dry;
  } else {
    data = passList;
  }

  return (
    <div className="w-full px-10  ">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 mb-6">
        <Button
          variant={"outline"}
          onClick={() => {
            setChecked("fridge1");
          }}>
          Fridge 1
        </Button>
        <Button
          variant={"outline"}
          onClick={() => {
            setChecked("walkIn");
          }}>
          Walk in
        </Button>
        <Button
          variant={"outline"}
          onClick={() => {
            setChecked("dry");
          }}>
          Dry
        </Button>
      </div>

      <div>
        <Checkboxlist list={data} />
      </div>
    </div>
  );
}
