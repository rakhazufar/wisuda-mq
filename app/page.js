"use client";

import Container from "@/components/Container";
import Section1 from "@/components/Home";
import Section2 from "@/components/Alamat";
import Section3 from "@/components/Alur";
import Section4 from "@/components/Keterangan";
import Section5 from "@/components/Pemberitahuan";
import Scroll from "@/components/scroll";
import { useScroll } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Opener from "@/components/Opener";
import AudioPlayer from "@/components/Audio";

export default function Home() {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const { ref: ref5, inView: inView5 } = useInView();
  const [isInView, setIsInView] = useState(false);
  const [showOpener, setShowOpener] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (inView5) {
      controls.start({ opacity: 0, y: -20, transition: { duration: 0.5 } });
      setIsInView(true);
    } else {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      setIsInView(false);
    }
  }, [inView5, controls]);

  useEffect(() => {
    if (showOpener == false) {
      setIsMuted(false);
    }
  }, [showOpener]);

  return (
    <main
      ref={containerRef}
      className={`flex ${
        showOpener ? "h-[100vh]" : "h-[500vh]"
      } relative flex-col items-center justify-between`}
    >
      {showOpener || (!isInView && <Scroll />)}
      <Container>
        {showOpener && <Opener setShowOpener={setShowOpener} />}
        {!showOpener && (
          <>
            <AudioPlayer Audio={{ isMuted, setIsMuted }} />
            <Section1 scrollYProgress={scrollYProgress} />
            <Section2 scrollYProgress={scrollYProgress} />
            <Section3 scrollYProgress={scrollYProgress} />
            <Section4 scrollYProgress={scrollYProgress} />
            <Section5 ref={ref5} scrollYProgress={scrollYProgress} />
          </>
        )}
      </Container>
    </main>
  );
}
