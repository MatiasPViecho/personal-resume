import MainCard from "./ui/main-card";

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute l-0 top-16 -translate-x-8 font-xanh_mono text-[64px] -z-10 text-light_slate text-nowrap"
      >
        MATIAS F. PEREZ VIECHO
      </span>
      <span
        aria-hidden="true"
        className="absolute l-0 top-48 -translate-x-16 font-xanh_mono text-[64px] -z-10 text-light_slate text-nowrap"
      >
        MATIAS F. PEREZ VIECHO
      </span>
      <span
        aria-hidden="true"
        className="absolute l-0 top-80 -translate-x-32 font-xanh_mono text-[64px] -z-10 text-light_slate text-nowrap"
      >
        MATIAS F. PEREZ VIECHO
      </span>
      <span
        aria-hidden="true"
        className="absolute l-0 top-[460px] -translate-x-40 font-xanh_mono text-[64px] -z-10 text-light_slate text-nowrap"
      >
        MATIAS F. PEREZ VIECHO
      </span>
      <div className="w-max mx-auto pt-32">
        <MainCard />
      </div>
    </main>
  );
}
