import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Saurabh Magara | Full Stack Developer",
  description: "Portfolio of Saurabh Magara - Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} font-sans antialiased text-text-primary bg-void-black min-h-screen relative overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
