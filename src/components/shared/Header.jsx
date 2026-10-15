import React from "react";
import headerImg from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";
import BreakingNews from "./BreakingNews";
const Header = () => {
  return (
    <div className="my-8">
      <Image
        className="mx-auto my-5"
        src={headerImg}
        width={300}
        height={200}
        alt="header logo"
      ></Image>
      <div className="text-center text-gray-500 space-y-2">
        <p>Journalism Without Fear or Favour</p>
        <p>{format(new Date(), "EEEE, MMMM d, y")}</p>
      </div>
      <BreakingNews />
    </div>
  );
};

export default Header;
