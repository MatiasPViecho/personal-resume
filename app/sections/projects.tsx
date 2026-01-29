import Table from "@/app/ui/table";
import Carousel from "@/app/ui/carousel/carousel";
import { ProjectI, TableI } from "@/app/interfaces";
import CardSection from "../ui/cards/card-section";

const all_table: TableI = {
  headers: ["Type", "Name", "Year"],
  rows: [
    ["Work", "Tuxdi | Full-stack developer", "December 2022 - Mar 2024"],
    ["College", "TUDAI (UNICEN)", "2021 - 2023"],
    ["College", "Systems Engineering (UNICEN)", "2024 - Actualidad"],
    ["Course", "ThreeJS Journey - Bruno Simon", "2025-2026",],
  ]
};
// const studies_table: TableI = {
//   headers: ["Country", "Carreer", "Year"],
//   rows: [
//     ["Argentina", "Computer Science", "Jan 2022 - Jan 2024"],
//     ["Argentina", "Systems Engineering", "Jan 2024 - Current"],
//   ],
// };
const personal_projects: ProjectI[] = [
  {
    href: "https://marble-race-game-ten.vercel.app/",
    alt: "Screenshot of marble race game project",
    imagePath: "/project-images/marble-race-screenshot.png",
    name: "Marble Race (R3F / ThreeJS / etc.)",
  },
  {
    href: "https://island-3d-fawn.vercel.app/",
    alt: "Screenshot of island-3d project",
    imagePath: "/project-images/island-3d-screenshot.png",
    name: "Stranded Island (ThreeJS)",
  },
  {
    href: "https://1000lumens.vercel.app/",
    alt: "Screenshot of 1000lumens project",
    imagePath: "/project-images/1000lumens-screenshot.png",
    name: "1000 Lumens",
  },
];
export default function ProjectsSection() {
  return (
    <div className="mt-12 flex flex-col px-2 sm:px-0 gap-4 sm:gap-8 md:gap-16 py-8 md:py-16">
      <h1 className="font-xanh_mono w-max text-4xl sm:text-7xl lg:text-9xl text-slate mx-auto tracking-wide">
        WHAT I&apos;VE DONE
      </h1>
      <div className="flex flex-col gap-12 md:gap-4">
        <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-0 overflow-visible">
          <div className="z-40 bg-gradient-to-r pointer-events-none from-dorian cloud bg-opacity-90 sm:p-4 md:p-8 xl:pl-32">
            <h2 className="font-work_sans text-lg font-medium uppercase">
              Experiences
            </h2>
            <Table headers={all_table.headers} rows={all_table.rows} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="md:pr-28 md:text-center font-work_sans text-lg font-medium uppercase">
              Personal Projects
            </h2>
            <Carousel items={personal_projects} />
          </div>
        </div>
        <div className="md:flex md:justify-between">
          <div className="z-40 bg-gradient-to-r pointer-events-none from-dorian cloud bg-opacity-90 sm:p-4 md:p-8 xl:pl-32">
                  <p className="md:max-w-96 italic bg-purple-300 p-2">Apart from formal experiences I spent most of my time whether learning about how old retro systems work, programming my own little projects, or working as a cameraman for sport events!</p>
          </div>
          <div className="flex-1 flex flex-col pb-40 pt-8">
            <h2 className="text-center font-work_sans text-lg font-medium uppercase">
              TECHNOLOGIES I USE
            </h2>
            <CardSection />
          </div>
        </div>
      </div>
    </div>
  );
}
