"use client";
import { useState } from "react";
import { SidebarMain } from "./SidebarMain";
import { SidebarSecond } from "./SidebarSecond";

const SidebarLayout = () => {
  const [showSecondSidebar, setShowSecondSidebar] = useState(true);
  return (
    <div>
      <div className="flex">
        <SidebarMain
          showSecondSidebar={showSecondSidebar}
          setShowSecondSidebar={setShowSecondSidebar}
        />
        <SidebarSecond showSecondSidebar={showSecondSidebar} />
      </div>
    </div>
  );
};

export default SidebarLayout;
