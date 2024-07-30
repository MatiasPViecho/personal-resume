import BackgroundMarquee from "@/app/ui/marquee/background-marquee";
import MainCard from "@/app/ui/main-card";
import PresentationText from "@/app/ui/presentation-text";
import Arrow from "@/app/ui/Home/Arrow";
export default function HomeSection() {
  return (
    <>
      <BackgroundMarquee />
      <div className="w-max mx-auto py-32 md:pt-32 md:pb-2">
        <MainCard />
      </div>
      <div className="md:flex md:justify-end md:p-4 relative">
        <Arrow />
        <PresentationText />
      </div>
    </>
  );
}
