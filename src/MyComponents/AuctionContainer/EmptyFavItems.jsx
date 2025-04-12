import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const EmptyFavItems = ({ fadeIN }) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={fadeIN}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.8, type: "spring" }}
        className="text-foreground text-center py-10 border-y border-gray-200 space-y-2"
      >
        <h4 className="text-2xl font-semibold">No favorite items</h4>
        <p className="text-sm">
          Click the heart icon on any item to add it to your favorites
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default EmptyFavItems;
