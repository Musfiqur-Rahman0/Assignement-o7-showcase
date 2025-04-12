import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
const Products = ({
  sortedProducts,
  bidProducts,
  setBidProducts,
  item,
  container,
}) => {
  return (
    <motion.tr
      variants={container}
      initial="hidden"
      whileInView="show"
      className="space-y-3"
    >
      {sortedProducts.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          setBidProducts={setBidProducts}
          bidProducts={bidProducts}
          item={item}
        />
      ))}
    </motion.tr>
  );
};

export default Products;
