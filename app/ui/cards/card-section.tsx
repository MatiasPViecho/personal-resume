"use client";
import Card from "./card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Draggable from "gsap/src/Draggable";
import { useRef } from "react";
import { IDirectionAngle } from "@/app/interfaces";
const ANGLE_ROTATE_DIVIDER = 20;
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
        bounds: {
          top: -50,
          left: 0,
        },
        edgeResistance: 1,
        dragResistance: 0.08,
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
    { scope: containerRef }
  );
  return (
    <div
      ref={containerRef}
      className="rounded-2xl bg-gradient-radial to-dorian from-dorian"
    >
      <ul ref={ulRef} className="drag-bounds">
        <li id="first-object" className="draggable-element max-w-max max-h-max">
          <Card name="Next.js" imgPath="/tech/next-js.svg" alt="Next.JS Icon" />
        </li>
        <li
          id="second-object"
          className="draggable-element max-w-max max-h-max"
        >
          <Card name="Next.js" imgPath="/tech/next-js.svg" alt="Next.JS Icon" />
        </li>
      </ul>
    </div>
  );
}
