import Table from "@/app/ui/table";
import Carousel from "@/app/ui/carousel/carousel";

const work_table = {
  headers: ["Place", "Role", "Year"],
  rows: [
    ["Tuxdi", "Full-stack developer", "Jan 2023 - Mar 2024"],
    ["Begit", "Product Manager", "Mar 2021 - Mar 2022"],
  ],
};
const studies_table = {
  headers: ["Country", "Carreer", "Year"],
  rows: [
    ["Argentina", "Computer Science", "Jan 2022 - Jan 2024"],
    ["Argentina", "Systems Engineering", "Jan 2024 - Current"],
  ],
};
export default function ProjectsSection() {
  return (
    <div className="mt-12 flex flex-col px-2 sm:px-0 gap-4 sm:gap-8 md:gap-16">
      <h1 className="font-xanh_mono w-max text-4xl sm:text-7xl lg:text-9xl text-slate mx-auto tracking-wide">
        WHAT I&apos;VE DONE
      </h1>
      <div className="flex flex-col gap-4">
        <div className="md:grid md:grid-cols-2 overflow-visible">
          <div className="z-40 bg-gradient-to-r pointer-events-none from-cloud bg-opacity-90 sm:p-4 md:p-8">
            <h2 className="font-work_sans text-lg font-medium uppercase">
              Work experience
            </h2>
            <Table headers={work_table.headers} rows={work_table.rows} />
          </div>
          <Carousel />
        </div>
        <div className="md:flex md:justify-between">
          <div className="z-40 bg-gradient-to-r pointer-events-none from-cloud bg-opacity-90 sm:p-4 md:p-8">
            <h2 className="font-work_sans text-lg font-medium uppercase">
              Studies
            </h2>
            <Table headers={studies_table.headers} rows={studies_table.rows} />
          </div>
        </div>
      </div>
    </div>
  );
}
