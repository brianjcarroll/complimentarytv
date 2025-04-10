import type { Metadata } from "next";
import { Space_Mono, Overpass } from "next/font/google";
import "./globals.css";



const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: "400",
  subsets: ["latin"],
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
