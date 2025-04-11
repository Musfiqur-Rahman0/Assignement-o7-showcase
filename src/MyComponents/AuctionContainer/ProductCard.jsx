import button from "daisyui/components/button";
import React, { useEffect, useState } from "react";
import { HiHeart } from "react-icons/hi";

import { IoHeartOutline } from "react-icons/io5";
import ToastNotification, { showToast } from "../Toast/ToastNotification";
import { toast } from "sonner";
import { TiTick } from "react-icons/ti";
import { AiFillHeart } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import HeartButton from "../HeartButton";

const ProductCard = ({ product, setBidProducts, bidProducts, item }) => {
  const { id, timeLeft, image, title, currentBidPrice } = product;

  const addToBidProducts = (product) => {
    setBidProducts([...bidProducts, product]);
  };

  const isExits = bidProducts.some((item) => item.id === product.id);

  return (
    <motion.td
      variants={item}
      className="hover:bg-background text-foreground bg-card rounded-2xl  p-3 grid grid-cols-5 gap-2 text-center"
    >
      <div className="col-span-2 flex items-center gap-2  text-left">
        <div className="h-20 w-20 ">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <p className="">{title}</p>
      </div>
      <p className="text-card-foreground my-auto">${currentBidPrice}</p>
      <p className="text-card-foreground my-auto">{timeLeft}</p>

      <AnimatePresence mode="wait">
        {isExits ? (
          <HeartButton key="heart" />
        ) : (
          <button
            onClick={() => {
              showToast("success", "Added", 1500), addToBidProducts(product);
            }}
            className="mx-auto cursor-pointer active:scale-90"
          >
            <IoHeartOutline size={25} />
          </button>
        )}
      </AnimatePresence>
    </motion.td>
  );
};

export default ProductCard;
