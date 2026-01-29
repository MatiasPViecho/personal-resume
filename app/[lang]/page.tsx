import ContactSection from "@/app/sections/contact";
import HomeSection from "@/app/sections/home";
import ProjectsSection from "@/app/sections/projects";
import { getDictionary } from "./dictionaries";
export default async function Home({
  params: { lang },
}: {
  params: { lang: "en" | "es" };
}) {
  const dict = await getDictionary(lang);
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <HomeSection dict={dict.home} />
      <ProjectsSection dict={dict.projects} />
      <ContactSection dict={dict.contact} />
    </main>
  );
}
