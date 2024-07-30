import HomeSection from "./sections/home";
import ProjectsSection from "./sections/projects";

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <HomeSection />
      <ProjectsSection />
    </main>
  );
}
