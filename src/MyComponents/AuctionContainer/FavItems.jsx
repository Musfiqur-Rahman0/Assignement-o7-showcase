import React, { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import EmptyFavItems from "./EmptyFavItems";
import AddedProducts from "./AddedProductCard";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const FavItems = ({ bidProducts, setBidProducts, fadeIN }) => {
  const price = bidProducts.reduce(
    (total, product) => product.currentBidPrice + total,
    0
  );

  return (
    <div>
      <div className="text-foreground flex items-center justify-center gap-2 pb-5 ">
        <IoHeartOutline size={25} className="mt-1" />
        <h2 className="text-2xl font-bold">Favorite Items</h2>
      </div>

      {bidProducts.length === 0 ? (
        <EmptyFavItems fadeIN={fadeIN} />
      ) : (
        <AddedProducts
          bidProducts={bidProducts}
          setBidProducts={setBidProducts}
          fadeIN={fadeIN}
        />
      )}
      <div className="text-foreground flex items-center justify-between  py-4">
        <p className="text-xl font-semibold">Total bids Amount</p>
        <p className="font-semibold text-xl">
          ${bidProducts.length !== 0 ? price : "0000"}
        </p>
      </div>
      <AnimatePresence>
        {bidProducts.length !== 0 && (
          <motion.div
            variants={fadeIN}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-end "
          >
            <Button
              onClick={() => setBidProducts([])}
              className="cursor-pointer"
            >
              Clear All
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FavItems;
