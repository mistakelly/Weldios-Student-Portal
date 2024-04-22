import React from "react";
import SideBar from "../Components/Navigations/SideBar";
import TopBar from "../Components/Navigations/TopBar";

function LogedLayout({ children }) {
  return (
    <section className="">
      <nav className="absolute border-r-2 bg-white">
        <div className="px-4 py-7">
          <h1 className="text-4xl">Weldios</h1>
        </div>
        <div className="px-4">
          <SideBar />
        </div>
      </nav>
      <div className="">
        <div className="flex-1">
          <TopBar />
        </div>
        <div className="pl-[18.1rem]">{children}</div>
      </div>
    </section>
  );
}

export default LogedLayout;
