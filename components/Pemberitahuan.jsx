import React, { forwardRef } from "react";
import Image from "next/image";
import Pattern from "@/public/pattern/pattern-background.png";
import { motion, useTransform } from "framer-motion";

const Section5 = forwardRef(({ scrollYProgress }, ref) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className="w-full sticky top-0 relative h-screen bg-gradient-radial from-[#1d1d1d] via-[#0d0d0d] to-[#000000] flex justify-center items-center"
    >
      <div className="md:w-[80%] w-[95%] md:h-[90%] relative h-[75%] bg-gradient-radial from-[#1d1d1d] via-[#0d0d0d] to-[#000000] flex justify-center items-center z-10">
        <div
          className="font-amiri w-[95%] h-[95%] bg-transparent border-2 text-center flex items-center justify-center flex-col "
          style={{
            borderImage: "linear-gradient(to right, #ffd700, #ffb700)",
            borderImageSlice: 1,
          }}
        >
          <div className="bg-amber-400 p-1 w-5/12 rounded-lg">
            <h2 className="text-base md:text-lg font-semibold text-black leading-6">
              Pemberitahuan
            </h2>
          </div>

          <div className="text-left p-2 md:p-3 space-y-2 md:space-y-4 text-white">
            <div className="bg-gray-800 p-3 rounded-lg shadow-lg">
              <p className="text-sm md:text-base leading-relaxed">
                * Tempat duduk yang disediakan hanya untuk Walisantri (ayah &
                ibu ) atau yang mewakili.
              </p>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg shadow-lg">
              <p className="text-sm md:text-base leading-relaxed">
                * Bagi anggota keluarga yang ikut hadir di acara Wisuda
                diarahkan untuk duduk di Tribun.
              </p>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg shadow-lg">
              <p className="text-sm md:text-base leading-relaxed">
                * Kupon Konsumsi akan diberikan kepada para Wisudwan/ti, setiap
                kupon dapat mengambil 3 Nasi Kotak.
              </p>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg shadow-lg">
              <p className="text-sm md:text-base leading-relaxed">
                * Penukaran kupon hanya dapat di lakukan oleh Wisudwan/ti,
                setelah acara selesai.
              </p>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg shadow-lg">
              <p className="text-sm md:text-base leading-relaxed">
                * Tempat Penukaran kupon di tempat resepsionis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={Pattern}
        alt="pattern"
        className="w-full h-full object-cover absolute inset-x-0 z-0"
      />
    </motion.div>
  );
});

Section5.displayName = "Section5";

export default Section5;
