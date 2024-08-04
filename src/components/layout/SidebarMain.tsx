"use client";
import { AvatarIcon, Copyicon } from "@/SVGs/SVGs";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type TSecondsidebarProps = {
  showSecondSidebar: boolean;
  setShowSecondSidebar: Dispatch<SetStateAction<boolean>>;
};

export const SidebarMain = ({
  showSecondSidebar,
  setShowSecondSidebar,
}: TSecondsidebarProps) => {
  return (
    <div className="h-screen z-[9999] w-[50px] py-8 bg-[#3C3C3C] text-center">
      <ul className="side-header-menu text-center relative h-full ">
        <li
          className="hover:border-white cursor-pointer duration-300  border-l-2 border-transparent pl-2"
          title="Sidebar"
          onClick={() => setShowSecondSidebar(!showSecondSidebar)}
        >
          <Copyicon width={25} height={25} />
        </li>

        <Link href="/">
          <li
            className="hover:border-white cursor-pointer duration-300  border-l-2 border-transparent pl-2"
            style={{ position: "absolute", bottom: "0" }}
            title="About"
          >
            <div className={`cursor-pointer`} title="About">
              <AvatarIcon width={30} height={30} />
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
};
