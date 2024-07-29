import Image from "next/image";

export default function MainCard() {
  return (
    <div className="flex flex-col w-[250px] h-[350px] gap-3 p-2">
      <Image
        alt="portrait"
        src={"/mock-photo.png"}
        className="w-[150px] h-[150px] rounded-full"
        width={150}
        height={150}
      />
      <div className="gap-2 flex flex-col w-full">
        <span className="font-xanh_mono">I&apos;m Matias</span>
        <p className="font-bold font-work_sans">
          Fullstack web developer +1 year of experience + studies
        </p>
      </div>
    </div>
  );
}
