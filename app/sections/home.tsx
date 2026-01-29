import BackgroundMarquee from "@/app/ui/marquee/background-marquee";
import MainCard from "@/app/ui/main-card";
import PresentationText from "@/app/ui/presentation-text";
import Arrow from "@/app/ui/Home/Arrow";
import type { IHomeDict } from "../interfaces";
export default function HomeSection({ dict }: { dict: IHomeDict }) {
  return (
    <>
      <BackgroundMarquee
        marquees={[
          "MATIAS F. PEREZ VIECHO",
          "WEB DEVELOPER",
          "MATIAS F. PEREZ VIECHO",
          "WEB DEVELOPER",
        ]}
      />
      <div className="w-max mx-auto py-32 md:pt-32 md:pb-2">
        <MainCard dict={dict.main.mainCard} />
      </div>
      <div className="md:flex md:justify-end md:p-4 relative">
        <Arrow />
        <PresentationText dict={dict.main.presentationText} />
      </div>
    </>
  );
}
