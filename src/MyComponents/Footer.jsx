import React from "react";
import Page from "../pages/Page";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center text-center text-card-foreground font-sora  bg-muted  p-10">
      <aside className="space-y-2">
        <Logo />
        <p className="">Bid. Win. Own.</p>
        <Page />
        <p>©{new Date().getFullYear()} AuctionHub. All rights reserved.</p>
      </aside>
    </footer>
  );
};

export default Footer;
