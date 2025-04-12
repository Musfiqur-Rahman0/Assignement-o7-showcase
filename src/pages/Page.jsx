import { Tabs } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const pages = ["home", "Auctions", "Categories", "How to works"];
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <motion.div className="font-poppins  items-center gap-5 hidden md:flex">
      {pages.map((page, index) => (
        <a
          href="#"
          key={index}
          onClick={() => setSelectedTab(index)}
          className="capitalize"
        >
          {page}
          {selectedTab === index && (
            <motion.div
              layoutId="underline"
              // id="underline"
              className="h-[2px] w-full bg-primary rounded-lg"
            ></motion.div>
          )}
        </a>
      ))}
    </motion.div>
  );
};

export default Page;
