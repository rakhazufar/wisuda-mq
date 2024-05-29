"use client";

import React from "react";
import Image from "next/image";
import Pattern from "@/public/pattern/pattern-background.png";
import { delay, motion } from "framer-motion";
import Logo from "@/public/logo-mq.png";
import ArabWisuda from "@/public/arabic-wisuda.png";
import Reveal from "@/components/Reveal";

function Opener({ setShowOpener }) {
  const variantsline = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const reveal = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1,
      },
    },
  };
  return (
    <motion.div className="w-full absolute top-0 relative h-screen bg-gradient-radial from-[#1d1d1d] via-[#0d0d0d] to-[#000000] flex justify-center items-center">
      <div className="md:w-[80%] w-[90%] md:h-[90%] relative h-[80%] bg-gradient-radial from-[#1d1d1d] via-[#0d0d0d] to-[#000000] flex justify-center items-center z-10">
        <motion.div
          variants={variantsline}
          initial="hidden"
          animate="visible"
          className="w-[95%] h-[95%] bg-transparent border-2 flex items-center justify-center flex-col gap-2  md:gap-1.5"
          style={{
            borderImage: "linear-gradient(to right, #ffd700, #ffb700)",
            borderImageSlice: 1,
          }}
        >
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="relative overflow-hidden"
          >
            <Image src={Logo} width={70} alt="logo mq" />
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="relative overflow-hidden"
          >
            <h1 className="font-amiri text-white text-5xl md:text-4xl font-bold">
              WISUDA
            </h1>
          </motion.div>
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="relative overflow-hidden"
          >
            <h2 className="font-amiri text-white text-base md:text-xl font-medium">
              Pondok Pesantren Madinatul Quran Bogor
            </h2>
          </motion.div>

          <motion.div
            className="p-3 bg-amber-500 rounded-full text-black hover:text-white font-amiri font-semibold cursor-pointer hover:bg-amber-600 transation-all duration-1000"
            onClick={() => {
              setShowOpener(false);
            }}
            variants={reveal}
            initial="hidden"
            animate="visible"
          >
            Buka Undangan
          </motion.div>
        </motion.div>
      </div>
      <Image
        src={Pattern}
        alt="pattern"
        className="w-full h-full object-cover absolute inset-x-0 z-0"
      ></Image>
    </motion.div>
  );
}

export default Opener;
