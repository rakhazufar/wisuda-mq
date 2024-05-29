import React from "react";
import { motion } from "framer-motion";

function Reveal({ children, className }) {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      className={className}
      animate="visible"
    >
      {children}
      <motion.div
        className="absolute bg-amber-400 top-0 left-0"
        variants={{
          hidden: { left: 0 },
          visible: {
            left: "100%",
            transition: {
              duration: 1,
              delay: 1,
              ease: "easeIn",
            },
          },
        }}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </motion.div>
  );
}

export default Reveal;
