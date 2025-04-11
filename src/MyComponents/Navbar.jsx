import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import Page from "../pages/Page";
import Logo from "./Logo";
import { ModeToggle } from "./Mode/ModeToggler";

const Navbar = ({ bidProducts }) => {
  return (
    <nav className=" font-poppins w-10/12 mx-auto flex items-center py-5  justify-between">
      <Logo />
      <Page />
      <div className="flex items-center gap-3">
        <div className="p-1 bg-[#EBF0F5] rounded-full text-black">
          <ModeToggle />
        </div>
        <div className="relative p-3 bg-[#EBF0F5] rounded-full">
          <IoNotificationsOutline size={25} className="text-black" />
          <span className="absolute top-1 right-2 text-lg bg-slate-800 text-white h-5 w-5 flex items-center justify-center rounded-[50%]">
            {bidProducts.length}
          </span>
        </div>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="/assets/Ellipse 19.png" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
