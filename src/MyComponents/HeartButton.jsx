import { motion } from "framer-motion";
import { AiFillHeart } from "react-icons/ai";

export default function HeartButton() {
  return (
    <motion.div
      key="heart"
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: 1 }}
      whileInView="show"
      exit={{
        scale: [1, 1.5, 2],
        opacity: [1, 0.7, 0],
        rotate: [0, 10, -10, 0],
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      className="mx-auto my-auto"
    >
      <AiFillHeart className="text-red-500 cursor-pointer " size={25} />
    </motion.div>
  );
}
