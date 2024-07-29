import BackgroundMarquee from "./ui/marquee/background-marquee";
import MainCard from "./ui/main-card";
import PresentationText from "./ui/presentation-text";

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <BackgroundMarquee />
      <div className="w-max mx-auto py-32">
        <MainCard />
      </div>
      <PresentationText />
    </main>
  );
}
