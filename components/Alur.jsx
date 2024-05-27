import React from "react";
import Image from "next/image";
import Pattern from "@/public/pattern/pattern-background.png";

function Section3() {
  return (
    <div className="w-full relative h-screen bg-gradient-radial from-[#1d1d1d] via-[#0d0d0d] to-[#000000] flex justify-center items-center">
      <div className="w-[95%] h-[95%] bg-gradient-radial from-[#1d1d1d] via-[#0d0d0d] to-[#000000] flex justify-center items-center z-10">
        <div
          className="w-[95%] h-[95%] bg-transparent border-4"
          style={{
            borderImage: "linear-gradient(to right, #ffd700, #ffb700)",
            borderImageSlice: 1,
          }}
        ></div>
      </div>
      <Image
        src={Pattern}
        alt="pattern"
        className="w-full h-full object-cover absolute inset-x-0 z-0"
      ></Image>
    </div>
  );
}

export default Section3;
