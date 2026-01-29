"use client";
import Card from "./card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Draggable from "gsap/src/Draggable";
import { useRef } from "react";
import { IDirectionAngle, ITechCard } from "@/app/interfaces";
const ANGLE_ROTATE_DIVIDER = 80;
const techCards: ITechCard[] = [
  {
    imagePath: "/tech/gsap.svg",
    name: "GSAP",
  },
  {
    imagePath: "/tech/postgresql.svg",
    name: "SQL",
  },

  {
    imagePath: "/tech/laravel.svg",
    name: "Laravel",
  },
  {
    imagePath: "/tech/next-js.svg",
    name: "Next.JS",
  },
  {
    imagePath: "/tech/scss.svg",
    name: "SCSS",
  },
  {
    imagePath: "/tech/css.svg",
    name: "CSS",
  },
  {
    imagePath: "/tech/typescript.svg",
    name: "Typescript",
  },
];
gsap.registerPlugin(useGSAP, Draggable);
export default function CardSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastDirectionAngle = useRef<IDirectionAngle>({
    x: 0,
    angle: 0,
  });
  const ulRef = useRef<HTMLUListElement>(null);
  useGSAP(
    () => {
      Draggable.create(".draggable-element", {
        onRelease: (args: PointerEvent) => {
          const currentElement = args.target as HTMLDivElement;
          const id = currentElement.offsetParent?.id;
          if (!id) return;
          if (lastDirectionAngle.current.x == 0) {
            lastDirectionAngle.current.x = args.x;
            gsap.to(`#${id}`, {
              rotateZ: 3,
            });
            return;
          }
          const traveledDistanceX = args.x - lastDirectionAngle.current.x;
          lastDirectionAngle.current.angle =
            traveledDistanceX / ANGLE_ROTATE_DIVIDER;
          gsap.to(`#${id}`, {
            rotationZ: lastDirectionAngle.current.angle,
          });
        },
      });
    },
    { scope: containerRef },
  );
  return (
    <div
      ref={containerRef}
      className="rounded-2xl bg-gradient-radial to-dorian from-dorian"
    >
      <ul ref={ulRef} className="drag-bounds relative">
        {techCards.map((card, i) => (
          <li
            key={`${card.name}-${i}`}
            id={`${card.name}-${i}`}
            className={`draggable-element max-w-max max-h-max absolute left-${
              i === 0 ? i + 1 : i * 4
            }`}
          >
            <Card
              name={card.name}
              imgPath={card.imagePath}
              alt={`${card.name} Icon`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
