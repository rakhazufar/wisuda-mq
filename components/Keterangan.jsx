import React from "react";
import Image from "next/image";
import Pattern from "@/public/pattern/pattern-background.png";
import AlurWisuda from "@/public/alur-wisuda.png";
import { motion } from "framer-motion";
import { useTransform } from "framer-motion";

function Section4({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.5, 1]);

  return (
    <motion.div
      style={{ scale }}
      className="w-full sticky top-0 relative h-screen bg-gradient-radial from-[#1d1d1d] via-[#0d0d0d] to-[#000000] flex justify-center items-center"
    >
      <div className="md:w-[80%] w-[95%] md:h-[90%] relative h-[75%] bg-gradient-radial from-[#1d1d1d] via-[#0d0d0d] to-[#000000] flex justify-center items-center z-10">
        <div
          className="font-amiri w-[95%] h-[95%] bg-transparent border-2 text-center flex items-center justify-center flex-col gap-2 md:gap-1"
          style={{
            borderImage: "linear-gradient(to right, #ffd700, #ffb700)",
            borderImageSlice: 1,
          }}
        >
          <div className="bg-amber-400 p-1 w-4/12 rounded-lg">
            <h2 className="text-base md:text-lg font-semibold text-black leading-6">
              Keterangan
            </h2>
          </div>

          <div className="text-left p-2 md:p-3 space-y-4 md:space-y-6 text-white">
            <div className="bg-gray-800 p-3 rounded-lg shadow-lg">
              <p className="text-sm md:text-base leading-relaxed">
                1. Wisudwan/ti maju ke panggung ketika disebutkan namanya oleh
                MC. Sedangkan walisantri yang bersangkutan menuju tempat
                photobooth yang sudah disediakan, untuk pengambilan photo
                bersama anggota keluarga.
              </p>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg shadow-lg">
              <p className="text-sm md:text-base leading-relaxed">
                2. Pengalungan wisudawan/ti oleh Dewan Senat masing-masing area
                (SD, SMP, SMA, Mahad Aly).
              </p>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg shadow-lg">
              <p className="text-sm md:text-base leading-relaxed">
                3. Wisudwan/ti turun dari panggung menuju tempat photobooth
                untuk pengambilan dokumentasi bersama anggota keluarga yang
                sudah menunggu di tempat photobooth.
              </p>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg shadow-lg">
              <p className="text-sm md:text-base leading-relaxed">
                4. Durasi pemotretan hanya 1 menit untuk setiap keluarga.
              </p>
            </div>
          </div>
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

export default Section4;
