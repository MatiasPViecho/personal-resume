import ContactSection from "@/app/sections/contact";
import HomeSection from "@/app/sections/home";
import ProjectsSection from "@/app/sections/projects";

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <HomeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
