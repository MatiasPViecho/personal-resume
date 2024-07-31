import Image from "next/image";
export default function CarouselItem({
  srcImage,
  alt,
  href,
  name,
}: {
  srcImage: string;
  alt: string;
  href: string;
  name: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener nofollow"
      data-after={name}
      className="after:content-[attr(data-after)] after:font-work_sans after:text-lg overflow-hidden after:absolute relative after:left-0 after:right-0 after:mx-auto after:text-center after:pointer-events-none after:top-1/4 after:scale-y-100 after:transition-all hover:after:scale-y-100 md:after:scale-y-0 after:p-2 after:bg-slate/20 after:text-cloud"
    >
      <Image
        className="w-80 h-52 md:w-[600px] md:h-[300px]"
        width={600}
        height={300}
        alt={alt}
        src={srcImage}
      />
    </a>
  );
}
