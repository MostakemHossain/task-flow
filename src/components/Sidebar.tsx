import Image from "next/image";
import Link from "next/link";
import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./Navigation";


const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href={"/"}>
        <Image src={"/logo.png"} width={180} height={180} alt="logo" />
      </Link>
      <DottedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};

export default Sidebar;
