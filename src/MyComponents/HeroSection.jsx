import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section id="hero-section" className="relative ">
      <img
        src="/assets/image.png"
        alt=""
        className="h-[700px] w-full object-cover bg-center  "
      />
      <div className="absolute  inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      <div className="absolute w-full inset-0 flex flex-col justify-center items-start text-white">
        <div className="w-10/12 mx-auto">
          <div className="sm:max-w-[630px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg"
            >
              Bid on Unique Items from{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-white to-white  bg-clip-text text-transparent">
                Around the World
              </span>
            </motion.h1>
            <p className="mt-4  max-w-md drop-shadow-md text-gray-400 text-sm sm:text-md">
              Discover vintage cars, rare collectibles, and timeless antiques
              from around the globe.
            </p>
          </div>
          <Button className="active:scale-90 mt-6 cursor-pointer bg-white text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition">
            Explore Auctions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
{
  /* <div className="absolute inset-0 h-full w-full">
        <div className="relative inset-0 h-full w-full">
          <div className=" absolute  top-1/2 transform -translate-y-1/2 left-[8%] ">
            <div className="max-w-[630px] space-y-3">
              <h1 className="text-4xl  md:text-5xl font-bold leading-tight drop-shadow-lg  text-foreground text-white">
                Bid on Unique Items from Around the World
              </h1>
              <p className="text-gray-400 w-[75%]  text-lg max-w-md drop-shadow-md">
                Discover rare collectibles, luxury goods, and vintage treasures
                in our curated auctions
              </p>
              <Button className="active:scale-90 rounded-full cursor-pointer bg-background text-foreground hover:bg-muted hover:text-inherit  shadow-lg">
                Explore Auctions
              </Button>
            </div>
          </div>
        </div>
      </div> */
}
