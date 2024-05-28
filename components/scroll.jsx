import React from "react";
import Down from "@/public/down.png";
import Image from "next/image";

function Scroll() {
  return (
    <div className="bg-amber-500 p-3 bottom-0 right-[1vw] md:right-[21vw] fixed z-50">
      <Image src={Down} alt="down" width={30} />
    </div>
  );
}

export default Scroll;
