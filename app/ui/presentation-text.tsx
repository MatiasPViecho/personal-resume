"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger, useGSAP);
export default function PresentationText() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "bottom center",
        scrub: false,
        markers: true,
        toggleActions: "play reverse reverse complete",
      },
    });
    tl.from(ref.current, {
      translateY: +100,
      opacity: 0,
    }).to(ref.current, {
      translateY: 0,
      opacity: 1,
    });
  });
  return (
    <div
      className="flex flex-col gap-8 px-2 font-medium font-work_sans text-sm"
      ref={ref}
    >
      <div>
        <span>I&apos;m a 23 yo. web developer from Argentina.</span>
        <p>
          I have a passion for developing and implementing complex systems and
          designs.
        </p>
      </div>
      <p>+1 year experience as dev | +4 years of experience in the industry</p>
      <p>
        I&apos;m currently studying Systems Engineering at UNICEN. (Argentina)
      </p>
    </div>
  );
}
