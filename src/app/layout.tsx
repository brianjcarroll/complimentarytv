import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Mono, Overpass } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: "400"
});

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Complimentary TV",
  description: "A series of sketches by Tom Hunt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${overpass.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
