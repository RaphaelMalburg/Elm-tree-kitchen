import Navbar from "@/components/Nav";
import Link from "next/link";

import { MdChevronLeft } from "react-icons/md";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
}
