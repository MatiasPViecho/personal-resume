import type { Metadata } from "next";
import "./globals.css";
import { xanhMono, workSans } from "./ui/fonts";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "Matias Viecho - Resume",
  description: "Online Resume developed with NextJS",
  authors: [{ name: "Matias Perez Viecho" }],
  creator: "Matias Perez Viecho",
  openGraph: {
    title: "Matias Viecho - Web Developer - Online Resume",
    description:
      "A project designed to showcase some of my abilities and experience as a web developer, in an easy to digest website",
    images: [
      {
        url: "/og.webp",
        width: 1901,
        height: 1079,
        alt: "Matias Viecho online resume (Web Developer)",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-dorian min-h-dvh ${xanhMono.variable} ${workSans.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
