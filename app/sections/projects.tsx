import Table from "@/app/ui/table";
import Carousel from "@/app/ui/carousel/carousel";
import { IPETable, IProjects, ProjectI, TableI } from "@/app/interfaces";
import CardSection from "../ui/cards/card-section";

function getTableColumns(dict: IPETable): string[] {
  return [dict.titles.first, dict.titles.second, dict.titles.third];
}
function getTableRows(dict: IPETable): string[][] {
  return [
    [dict.content.first.name, dict.content.first.type, dict.content.first.year],
    [
      dict.content.second.name,
      dict.content.second.type,
      dict.content.second.year,
    ],
    [dict.content.third.name, dict.content.third.type, dict.content.third.year],
    [
      dict.content.fourth.name,
      dict.content.fourth.type,
      dict.content.fourth.year,
    ],
  ];
}
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
export default function ProjectsSection({ dict }: { dict: IProjects }) {
  return (
    <div className="mt-12 flex flex-col px-2 sm:px-0 gap-4 sm:gap-8 md:gap-16 py-8 md:py-16">
      <h1 className="font-xanh_mono w-max text-4xl sm:text-7xl lg:text-9xl text-slate mx-auto tracking-wide">
        {dict.title_1}
      </h1>
      <div className="flex flex-col gap-12 md:gap-4">
        <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-0 overflow-visible">
          <div className="z-40 bg-gradient-to-r pointer-events-none from-dorian cloud bg-opacity-90 sm:p-4 md:p-8 xl:pl-32">
            <h2 className="font-work_sans text-lg font-medium uppercase">
              {dict.experiences.title}
            </h2>
            <Table
              headers={getTableColumns(dict.experiences.table)}
              rows={getTableRows(dict.experiences.table)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="md:pr-28 md:text-center font-work_sans text-lg font-medium uppercase">
              {dict.subtitle_2}
            </h2>
            <Carousel items={personal_projects} />
          </div>
        </div>
        <div className="md:flex md:justify-between">
          <div className="z-40 bg-gradient-to-r pointer-events-none from-dorian cloud bg-opacity-90 sm:p-4 md:p-8 xl:pl-32">
            <p className="md:max-w-96 italic bg-purple-300 p-2">
              {dict.subtitle_1}
            </p>
          </div>
          <div className="flex-1 flex flex-col pb-40 pt-8">
            <h2 className="text-center font-work_sans text-lg font-medium uppercase">
              {dict.title_2}
            </h2>
            <CardSection />
          </div>
        </div>
      </div>
    </div>
  );
}
