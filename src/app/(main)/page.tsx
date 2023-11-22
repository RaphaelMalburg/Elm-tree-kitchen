import { Metadata } from "next";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Elm Tree kitchen checklists",
};

const Home = () => {
  return (
    <div className="flex items-center space-x-2 w-full flex-col gap-10">
      <h1 className="pt-8 text-lg font-medium">Prep. Lists Elm Tree Kitchen</h1>
      <div className="w-full px-10 grid gap-4 grid-cols-2 ">
        <Button className=" bg-green-700">
          <Link href={"/pass"}>Pass</Link>
        </Button>
        <Button className=" bg-blue-700">
          <Link href={"/starters"}>Starters</Link>
        </Button>
        <Button className=" bg-red-700">
          <Link href={"/mains"}>Mains</Link>
        </Button>
        <Button className=" bg-yellow-700">
          <Link href={"/desserts"}>Desserts</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
