import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Memora",
  description: "A diary you can walk into.",
};

export const viewport: Viewport = {
  themeColor: "#FFF0F6",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable} min-h-full`}>
      <body className="min-h-full overflow-x-clip bg-neutral font-sans text-body text-primary antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
