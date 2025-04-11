import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section id="hero-section" className="relative ">
      <img
        src="/assets/Banner-min.jpg"
        alt=""
        className="h-screen w-full object-cover bg-center  "
      />
      <div className="absolute inset-0 h-full w-full">
        <div className="relative inset-0 h-full w-full">
          <div className=" absolute  top-1/2 transform -translate-y-1/2 left-[8%] ">
            <div className="max-w-[630px] space-y-3">
              <h1 className="text-5xl font-bold  leading-14 text-white">
                Bid on Unique Items from Around the World
              </h1>
              <p className="text-gray-400 w-[75%]">
                Discover rare collectibles, luxury goods, and vintage treasures
                in our curated auctions
              </p>

              <Button className="active:scale-90 rounded-full cursor-pointer bg-background text-foreground hover:bg-muted hover:text-inherit ">
                Explore Auctions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
