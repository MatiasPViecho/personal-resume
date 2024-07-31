"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Draggable from "gsap/src/Draggable";
import { useRef } from "react";
import CarouselItem from "@/app/ui/carousel/carousel-item";
gsap.registerPlugin(useGSAP, Draggable);
export default function Carousel() {
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
        <CarouselItem srcImage="/mock-card.jpg" alt="Dog Staring" />
        <CarouselItem srcImage="/mock-card.jpg" alt="Dog Staring" />
        <CarouselItem srcImage="/mock-card.jpg" alt="Dog Staring" />
      </ul>
    </div>
  );
}
