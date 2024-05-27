import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Fungsi untuk mengupdate ukuran jendela
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Tambahkan event listener
    window.addEventListener("resize", handleResize);

    // Panggil handleResize untuk mengatur ukuran jendela pada awal render
    handleResize();

    // Bersihkan event listener saat komponen dibongkar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
