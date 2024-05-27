"use client";

import React from "react";
import Image from "next/image";
import Pattern from "@/public/pattern/pattern-background.png";
import { useTransform, motion, delay } from "framer-motion";
import Logo from "@/public/logo-mq.png";
import ArabWisuda from "@/public/arabic-wisuda.png";
import Reveal from "@/components/Reveal";
import Topi from "@/public/topi.png";
import Pin from "@/public/pin.png";
import Buku from "@/public/buku.png";
function Section1({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  const variantsline = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      style={{ scale, rotate }}
      className="w-full sticky top-0 relative h-screen bg-gradient-radial from-[#1d1d1d] via-[#0d0d0d] to-[#000000] flex justify-center items-center"
    >
      <div className="md:w-[80%] w-[95%] md:h-[90%] relative h-[75%] bg-gradient-radial from-[#1d1d1d] via-[#0d0d0d] to-[#000000] flex justify-center items-center z-10">
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, -10, 0] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="w-full h-full absolute left-3 top-3 z-20 mt-[-0.7rem]"
        >
          <Image src={Topi} alt="topi" width={120} />
        </motion.div>

        <motion.div
          animate={{ y: [0, -5, 0], x: [0, 5, 0], rotate: [0, 5, 0] }} // Mengubah arah animasi x ke kanan
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute right-[5vw] top-[12vh] md:top-[10vh]  z-20"
        >
          <Image src={Pin} alt="pin" width={50} />
        </motion.div>

        <motion.div
          animate={{ y: [0, -5, 0], x: [0, 5, 0], rotate: [0, 5, 0] }} // Mengubah arah animasi x ke kanan
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute right-0 bottom-0 z-20"
        >
          <Image src={Buku} alt="buku" width={100} height={100} />
        </motion.div>

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
          <Reveal className="relative overflow-hidden">
            <Image src={Logo} width={60} alt="logo mq" />
          </Reveal>
          <Reveal className="relative overflow-hidden">
            <h3 className="font-amiri text-base md:text-xl font-normal">
              Anda diundang untuk hadir di Acara
            </h3>
          </Reveal>
          <Reveal className="relative overflow-hidden">
            <h1 className="font-amiri text-3xl md:text-4xl font-bold">
              WISUDA
            </h1>
          </Reveal>
          <Reveal className="relative overflow-hidden">
            <h2 className="font-amiri text-base md:text-xl font-medium">
              Pondok Pesantren Madinatul Quran Bogor
            </h2>
          </Reveal>

          <Reveal className="relative overflow-hidden">
            <Image
              src={ArabWisuda}
              width={500}
              className="mt-[-1rem]"
              alt="logo mq"
            />
          </Reveal>
          <Reveal className="relative overflow-hidden flex gap-2 items-center font-amiri border-2 py-2 px-4 rounded-lg bg-transparent	mt-2 border border-amber-400">
            <p className="text-base md:text-lg">Juni</p> <p>|</p>{" "}
            <p className="text-3xl md:text-5xl">01</p>
            <p>|</p>
            <p className="text-base md:text-lg">2024</p>
          </Reveal>

          <Reveal className="relative overflow-hidden font-amiri text-center md:mt-4 mt-2 w-[]">
            <p className="text-base md:text-xl">08.00 – Selesai</p>
            <p className="text-base md:text-xl">
              Gelanggang Olahraga Masyarakat (GOM) Jonggol.
            </p>
            <p className="text-base md:text-xl">
              Jonggol, Kabupaten Bogor, Jawa Barat
            </p>
          </Reveal>
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

export default Section1;
