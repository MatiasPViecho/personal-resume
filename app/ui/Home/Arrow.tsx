"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
export default function Arrow() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".arrow-pointer", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0, 0 0, 0% 100%)",
    }).to(".arrow-pointer", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    });
  });
  return (
    <Image
      className="-z-20 arrow-pointer hidden md:block md:absolute md:left-16 top-16 md:-rotate-12"
      alt="arrow pointing down"
      src="/misc/arrow.svg"
      height={48}
      width={110}
    />
  );
}
