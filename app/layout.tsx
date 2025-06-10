import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InternPH",
  description: "Find your OJT in just a few clicks.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
