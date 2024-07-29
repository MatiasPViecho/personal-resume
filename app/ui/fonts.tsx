import { Xanh_Mono } from "next/font/google";
import { Work_Sans } from "next/font/google";
export const xanhMono = Xanh_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-xanh_mono",
});
export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-work_sans",
});
