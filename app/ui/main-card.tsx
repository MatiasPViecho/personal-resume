"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
export default function MainCard() {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(container.current, {
        duration: 0.8,
        opacity: 0,
        translateY: -50,
      })
        .to(container.current, {
          duration: 0.8,
          opacity: 1,
          translateY: 0,
        })
        .from(
          ".text-animated",
          {
            stagger: 0.05,
            translateY: +100,
            opacity: 0,
          },
          "-=1.2"
        )
        .to(
          ".text-animated",
          {
            translateY: 0,
            opacity: 1,
            stagger: 0.1,
          },
          "-=1.2"
        )
        .from(
          ".link-icon",
          {
            stagger: 0.05,
            translateY: +100,
          },
          "-=1.2"
        )
        .to(
          ".link-icon",
          {
            translateY: 0,
            stagger: 0.1,
          },
          "-=1.2"
        );
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="overflow-hidden flex flex-col w-[250px] h-[350px] gap-3 p-2  border-slate border-4 rounded-2xl bg-cloud/70 backdrop-blur-[2px]"
    >
      <Image
        alt="portrait"
        src={"/mock-photo.png"}
        className="w-[150px] h-[150px] rounded-full mx-auto"
        width={150}
        height={150}
      />
      <div className="gap-2 flex flex-col w-full">
        <span className="font-xanh_mono text-iris text-[40px] tracking-tight text-animated">
          I&apos;m Matias
        </span>
        <div className="flex flex-col gap-0 font-semibold font-work_sans text-sm text-animated">
          <span>Fullstack web developer</span>
          <span> +1 year of experience + studies</span>
        </div>
      </div>
      <div className="flex gap-2 max-h-10">
        <Image
          className="link-icon"
          alt="linkedin icon"
          width={40}
          height={40}
          src="/icons/icon-linkedin.png"
        />
        <Image
          className="link-icon"
          alt="github icon"
          width={40}
          height={40}
          src="/icons/icon-github.png"
        />
        <Image
          className="link-icon"
          alt="email icon"
          width={60}
          height={40}
          src="/icons/icon-mail.png"
        />
        <Image
          className="link-icon"
          alt="resume icon"
          width={30}
          height={40}
          src="/icons/icon-file.png"
        />
      </div>
    </div>
  );
}
