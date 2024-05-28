import React from "react";
import Image from "next/image";
import Pattern from "@/public/pattern/pattern-background.png";
import DenahWisuda from "@/public/denah-wisuda.png";
import { useTransform, motion } from "framer-motion";

function Section2({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <motion.div
      style={{ scale }}
      className="w-full sticky top-0 relative h-screen bg-gradient-radial from-[#1d1d1d] via-[#0d0d0d] to-[#000000] flex justify-center items-center"
    >
      <div className="md:w-[80%] w-[95%] md:h-[90%] relative h-[75%] bg-gradient-radial from-[#1d1d1d] via-[#0d0d0d] to-[#000000] flex justify-center items-center z-10">
        <div
          className="font-amiri w-[95%] h-[95%] bg-transparent border-2 text-center flex items-center justify-center flex-col gap-5  md:gap-1.5"
          style={{
            borderImage: "linear-gradient(to right, #ffd700, #ffb700)",
            borderImageSlice: 1,
          }}
        >
          <div className="bg-amber-400 p-1 w-11/12 rounded-lg">
            <h2 className=" text-lg md:text-xl font-semibold text-black leading-6">
              Denah Lokasi Gelanggang Olahraga Masyarakat (GOM) Jonggol
            </h2>
          </div>

          <Image
            src={DenahWisuda}
            alt="denah wisuda"
            className="w-[90%] md:w-[50%] cursor-pointer"
          />
        </div>
      </div>
      <Image
        src={Pattern}
        alt="pattern"
        className="w-full h-full object-cover absolute inset-x-0 z-0"
      ></Image>
    </motion.div>
  );
}

export default Section2;
