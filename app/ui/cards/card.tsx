import Image from "next/image";
export default function Card({
  imgPath,
  alt,
  name,
}: {
  imgPath: string;
  alt: string;
  name: string;
}) {
  return (
    <div className="bg-cloud content-center border-onyx rounded-lg border w-[100px] h-[125px] md:w-[200px] md:h-[250px] py-4 px-3 text-sm md:text-lg">
      <Image
        src={imgPath}
        alt={alt}
        width={128}
        height={128}
        className={"md:w-32 md:h-32 w-16 h-16 mx-auto"}
      />
      <p className="font-work_sans font-semibold pt-2 md:pt-8 select-none text-sm text-center">
        {name}
      </p>
    </div>
  );
}
