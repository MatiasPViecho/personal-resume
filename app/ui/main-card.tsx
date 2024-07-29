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
        <a
          href="https://www.linkedin.com/in/matias-francisco-perez-viecho/"
          rel="noreferrer noopener nofollow"
          target="_blank"
          className="relative before:opacity-0 hover:before:opacity-100 hover:before:translate-y-0 before:translate-y-8 before:transition-transform before:content-[attr(before)] before:p-1 before:z-20 before:select-none before:absolute before:bottom-8 before:pointer-events-none before:font-work_sans before:-right-28 before:text-sm before:bg-cloud before:border before:border-onyx before:rounded-lg before:w-max"
          before="Check my LinkedIn!"
        >
          <Image
            className="link-icon"
            alt="linkedin icon"
            width={40}
            height={40}
            src="/icons/icon-linkedin.png"
          />
        </a>
        <a
          href="https://github.com/MatiasPViecho"
          rel="noreferrer noopener nofollow"
          target="_blank"
          className="relative before:opacity-0 hover:before:opacity-100 hover:before:translate-y-0 before:translate-y-8 before:transition-transform before:content-[attr(before)] before:p-1 before:z-20 before:select-none before:absolute before:bottom-8 before:pointer-events-none before:font-work_sans before:-right-24 before:text-sm before:bg-cloud before:border before:border-onyx before:rounded-lg before:w-max"
          before="Check my github!"
        >
          <Image
            className="link-icon"
            alt="github icon"
            width={40}
            height={40}
            src="/icons/icon-github.png"
          />
        </a>
        <a
          href="mailto:matiasviecho.work@gmail.com"
          rel="noreferrer noopener nofollow"
          className="relative before:opacity-0 hover:before:opacity-100 hover:before:translate-y-0 before:translate-y-8 before:transition-transform before:content-[attr(before)] before:p-1 before:z-20 before:select-none before:absolute before:bottom-8 before:pointer-events-none before:font-work_sans before:-right-16 before:text-sm before:bg-cloud before:border before:border-onyx before:rounded-lg before:w-max"
          before="Send me an email!"
        >
          <Image
            className="link-icon"
            alt="email icon"
            width={60}
            height={40}
            src="/icons/icon-mail.png"
          />
        </a>
        <a
          href="/resume.pdf"
          rel="noreferrer noopener nofollow"
          download
          className="relative before:opacity-0 hover:before:opacity-100 hover:before:translate-y-0 before:translate-y-8 before:transition-transform before:content-[attr(before)] before:p-1 before:z-20 before:select-none before:absolute before:bottom-8 before:pointer-events-none before:font-work_sans before:-right-8 before:text-sm before:bg-cloud before:border before:border-onyx before:rounded-lg before:w-max"
          before="Download my CV!"
        >
          <Image
            className="link-icon"
            alt="resume icon"
            width={30}
            height={40}
            src="/icons/icon-file.png"
          />
        </a>
      </div>
    </div>
  );
}
