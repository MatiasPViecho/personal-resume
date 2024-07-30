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
        start: "top bottom",
        end: "bottom center",
        scrub: false,
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
      className="flex w-max max-w-72 flex-col mx-auto sm:mx-0 text-wrap sm:ml-auto sm:max-w-96 md:max-w-max gap-8 md:gap-2 px-2 font-medium font-work_sans text-sm"
      ref={ref}
    >
      <div>
        <span>I&apos;m a 23 yo. web developer from Argentina.</span>
        <p className="md:max-w-96">
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
