import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.ttf",
});

export const metadata: Metadata = {
  title: "InternPH",
  description: "Find your OJT in just a few clicks.",
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "InternPH",
    description: "Find your OJT in just a few clicks.",
    url: "https://internph.com",
    siteName: "InternPH",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "InternPH - Find your OJT in just a few clicks.",
      },
    ],
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
        className={`${satoshi.className} antialiased selection:bg-[#216AF8] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
