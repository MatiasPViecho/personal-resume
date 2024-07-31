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
    <a href={href} target="_blank" rel="noreferrer noopener nofollow">
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
