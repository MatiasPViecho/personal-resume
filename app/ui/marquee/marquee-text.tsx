export default function MarqueeText({ text }: { text: string }) {
  return (
    <span
      aria-hidden="true"
      className={`marquee-text font-xanh_mono text-[64px] md:text-[128px] tracking-wide md:tracking-wider -z-10 text-light_slate text-nowrap`}
    >
      {text} {text} {text}
    </span>
  );
}
