"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
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
      className="overflow-hidden flex flex-col w-[250px] h-[350px] md:h-[700px] md:w-[500px] gap-3 p-2 md:p-8  border-slate border-4 rounded-2xl bg-cloud/70 backdrop-blur-sm relative"
    >
      <Link
        href={"#test"}
        className="absolute top-4 right-4 hover:rotate-12 transition-transform"
      >
        <Image src="/misc/info.svg" width={32} height={32} alt="information" />
      </Link>
      <Image
        alt="portrait"
        src={"/IMG_3478-4.jpg"}
        className="border-2 border-onyx shadow-lg w-[150px] h-[150px] md:w-[400px] md:h-[400px] rounded-full mx-auto"
        width={1000}
        height={1500}
      />
      <div className="gap-2 flex flex-col w-full">
        <span className="font-xanh_mono text-iris text-[40px] tracking-tight text-animated">
          I&apos;m Matias
        </span>
        <div className="flex flex-col gap-0 font-semibold font-work_sans text-sm text-animated md:text-base">
          <span>Fullstack web developer</span>
          <span> +1 year of experience + studies</span>
        </div>
      </div>
      <div className="flex gap-2 max-h-10 md:pt-8">
        <a
          href="https://www.linkedin.com/in/matias-francisco-perez-viecho/"
          rel="noreferrer noopener nofollow"
          target="_blank"
          className="relative before:opacity-0 hover:before:opacity-100 hover:before:translate-y-0 md:hover:before:translate-y-4 before:translate-y-8 before:transition-transform before:content-[attr(data-before)] before:p-1 before:z-20 before:select-none before:absolute before:bottom-8 before:pointer-events-none before:font-work_sans before:-right-28 before:text-sm before:bg-cloud before:border before:border-onyx before:rounded-lg before:w-max"
          data-before="Check my LinkedIn!"
        >
          <Image
            className="link-icon h-10 w-10 md:h-16 md:w-16"
            alt="linkedin icon"
            width={64}
            height={64}
            src="/icons/icon-linkedin.svg"
          />
        </a>
        <a
          href="https://github.com/MatiasPViecho"
          rel="noreferrer noopener nofollow"
          target="_blank"
          className="relative before:opacity-0 hover:before:opacity-100 hover:before:translate-y-0 md:hover:before:translate-y-4 before:translate-y-8 before:transition-transform before:content-[attr(data-before)] before:p-1 before:z-20 before:select-none before:absolute before:bottom-8 before:pointer-events-none before:font-work_sans before:-right-24 before:text-sm before:bg-cloud before:border before:border-onyx before:rounded-lg before:w-max"
          data-before="Check my github!"
        >
          <Image
            className="link-icon h-10 w-10 md:h-16 md:w-16"
            alt="github icon"
            width={64}
            height={64}
            src="/icons/icon-github.svg"
          />
        </a>
        <a
          href="mailto:matiasviecho.work@gmail.com"
          rel="noreferrer noopener nofollow"
          className="relative before:opacity-0 hover:before:opacity-100 hover:before:translate-y-0 md:hover:before:translate-y-4 before:translate-y-8 before:transition-transform before:content-[attr(data-before)] before:p-1 before:z-20 before:select-none before:absolute before:bottom-8 before:pointer-events-none before:font-work_sans before:-right-16 before:text-sm before:bg-cloud before:border before:border-onyx before:rounded-lg before:w-max"
          data-before="Send me an email!"
        >
          <Image
            className="link-icon h-10 w-12 md:h-16 md:w-20"
            alt="email icon"
            width={80}
            height={64}
            src="/icons/icon-mail.svg"
          />
        </a>
        <a
          href="/resume.pdf"
          rel="noreferrer noopener nofollow"
          download
          className="relative before:opacity-0 hover:before:opacity-100 hover:before:translate-y-0 md:hover:before:translate-y-4 before:translate-y-8 before:transition-transform before:content-[attr(data-before)] before:p-1 before:z-20 before:select-none before:absolute before:bottom-8 before:pointer-events-none before:font-work_sans before:-right-8 before:text-sm before:bg-cloud before:border before:border-onyx before:rounded-lg before:w-max"
          data-before="Download my CV!"
        >
          <Image
            className="link-icon h-10 w-8 md:h-16 md:w-12"
            alt="resume icon"
            width={48}
            height={64}
            src="/icons/icon-file.svg"
          />
        </a>
      </div>
    </div>
  );
}
