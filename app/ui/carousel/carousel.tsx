"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Draggable from "gsap/src/Draggable";
import { useRef } from "react";
import CarouselItem from "@/app/ui/carousel/carousel-item";
import { ProjectI } from "@/app/interfaces";
gsap.registerPlugin(useGSAP, Draggable);
export default function Carousel({ items }: { items: ProjectI[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    Draggable.create(".carousel-ul", {
      type: "x",
      bounds: ref.current,
    });
  });
  return (
    <div className="carousel-container z-10" ref={ref}>
      <ul className="flex gap-2 w-max mt-2 carousel-ul">
        {items.map((item, i) => (
          <li
            key={`${item.name} + ${i}`}
            className="rounded-3xl overflow-hidden border border-black"
          >
            <CarouselItem
              href={item.href}
              srcImage={item.imagePath}
              alt={item.alt}
              name={item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
