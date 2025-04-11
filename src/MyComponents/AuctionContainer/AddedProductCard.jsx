import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import ToastNotification, { showToast } from "../Toast/ToastNotification";
import { CiWarning } from "react-icons/ci";
import { toast } from "sonner";
import { AnimatePresence, motion } from "framer-motion";
const AddedProducts = ({ bidProducts, setBidProducts, fadeIN }) => {
  const handleRemoveItems = (id) => {
    const filteredProducts = bidProducts.filter((product) => product.id !== id);
    setBidProducts(filteredProducts);
  };

  return (
    <div className="px-5 text-foreground space-y-2 ">
      {bidProducts.map((product) => {
        const { id, title, timeLeft, image, currentBidPrice, bidsCount } =
          product;
        return (
          <AnimatePresence key={id}>
            <motion.div
              variants={fadeIN}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hover:bg-background flex bg-card rounded-2xl  justify-between p-3  gap-5"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 ">
                  <img
                    className="h-full w-full object-cover rounded-lg"
                    src={image}
                    alt={title}
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm">{title}</h4>
                  <div className="flex items-center gap-5">
                    <p className="text-card-foreground font-semibold">
                      ${currentBidPrice}
                    </p>
                    <p className="">Bids: {bidsCount}</p>
                  </div>
                </div>
              </div>
              <button
                // here i used two functions using curly brakets. one for toast notification and other for remove items
                onClick={() => {
                  showToast("warning", "Removed", 1500), handleRemoveItems(id);
                }}
                className="active:scale-90 p-2 cursor-pointer bg-muted text-foreground rounded-full h-fit"
              >
                <CgClose size={20} />
              </button>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
};

export default AddedProducts;
