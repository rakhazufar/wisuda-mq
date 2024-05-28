import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wisuda MQ",
  description: "Wisuda MQ 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
