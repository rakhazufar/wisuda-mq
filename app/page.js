"use client";

import Container from "@/components/Container";
import Section1 from "@/components/Home";
import Section2 from "@/components/Alamat";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Confetti from "react-confetti";
import useWindowSize from "@/hooks/useWindowSize";

export default function Home() {
  const container = useRef();
  const { width, height } = useWindowSize();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const drawShape = (ctx) => {
    ctx.beginPath();
    const scale = 0.5; // Tambahkan faktor skala untuk memperkecil bentuk
    for (let i = 0; i < 22; i++) {
      const angle = 0.35 * i;
      const x = (0.2 + 1.5 * angle) * Math.cos(angle) * scale;
      const y = (0.2 + 1.5 * angle) * Math.sin(angle) * scale;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.closePath();
  };

  return (
    <main
      ref={container}
      className="flex h-[200vh] flex-col items-center justify-between"
    >
      <Container>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
        {/* <Confetti
          width={width}
          height={height}
          numberOfPieces={50}
          colors={["#ffd700"]}
          opacity={0.7}
          drawShape={drawShape}
          gravity={0.04}
        /> */}
      </Container>
    </main>
  );
}
