"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import MarqueeText from "./marquee-text";
gsap.registerPlugin(ScrollTrigger, useGSAP);
export default function BackgroundMarquee() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".marquee-text",
        start: "-50% top",
        end: "600% top",
        scrub: true,
      },
    });
    tl.from(".marquee-text", {
      xPercent: -10,
      stagger: 0.02,
    }).to(".marquee-text", {
      xPercent: -40,
      stagger: 0.02,
    });
  });
  return (
    <div
      aria-hidden="true"
      className="absolute pointer-events-none top-8 md:top-20 flex flex-col gap-16 md:gap-2"
    >
      <MarqueeText text={"MATIAS F. PEREZ VIECHO"} />
      <MarqueeText text={"FULLSTACK WEB DEVELOPER"} />
      <MarqueeText text={"MATIAS F. PEREZ VIECHO"} />
      <MarqueeText text={"FULLSTACK WEB DEVELOPER"} />
    </div>
  );
}
