"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import MarqueeText from "./marquee-text";
import { Fragment } from "react";
gsap.registerPlugin(ScrollTrigger, useGSAP);
export default function BackgroundMarquee({
  marquees = [],
}: {
  marquees: string[];
}) {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".marquee-text",
        start: "-150% top",
        end: "400% top",
        scrub: true,
      },
    });
    tl.to(".marquee-text", {
      translateX: -800,
      stagger: 0.02,
    });
  });
  return (
    <div
      aria-hidden="true"
      className="absolute pointer-events-none top-8 md:top-20 flex flex-col gap-16 md:gap-2"
    >
      {marquees.map((marquee, i) => (
        <Fragment key={i}>
          <MarqueeText text={marquee} />
        </Fragment>
      ))}
    </div>
  );
}
