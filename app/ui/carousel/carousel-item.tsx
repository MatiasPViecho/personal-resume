import Image from "next/image";
export default function CarouselItem({
  srcImage,
  alt,
}: {
  srcImage: string;
  alt: string;
}) {
  return (
    <li className="rounded-3xl overflow-hidden border border-black">
      <Image
        className="w-80 h-52 md:w-[600px] md:h-[300px]"
        width={600}
        height={300}
        alt={alt}
        src={srcImage}
      />
    </li>
  );
}
