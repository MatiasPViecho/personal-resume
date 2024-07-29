import Image from "next/image";

export default function MainCard() {
  return (
    <div className="flex flex-col w-[250px] h-[350px] gap-3 p-2  border-slate border-4 rounded-2xl bg-cloud/70 backdrop-blur-[2px]">
      <Image
        alt="portrait"
        src={"/mock-photo.png"}
        className="w-[150px] h-[150px] rounded-full mx-auto"
        width={150}
        height={150}
      />
      <div className="gap-2 flex flex-col w-full">
        <span className="font-xanh_mono text-iris text-[40px] tracking-tight">
          I&apos;m Matias
        </span>
        <div className="flex flex-col gap-0 font-semibold font-work_sans text-sm">
          <span>Fullstack web developer</span>
          <span> +1 year of experience + studies</span>
        </div>
      </div>
      <div className="flex gap-2 max-h-10">
        <Image
          alt="linkedin icon"
          width={40}
          height={40}
          src="/icons/icon-linkedin.png"
        />
        <Image
          alt="github icon"
          width={40}
          height={40}
          src="/icons/icon-github.png"
        />
        <Image
          alt="email icon"
          width={60}
          height={40}
          src="/icons/icon-mail.png"
        />
        <Image
          alt="resume icon"
          width={30}
          height={40}
          src="/icons/icon-file.png"
        />
      </div>
    </div>
  );
}
