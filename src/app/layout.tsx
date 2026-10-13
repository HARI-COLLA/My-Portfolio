import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mallangi Harinath Reddy | Engineering Creative Solutions",
  description:
    "Portfolio of Mallangi Harinath Reddy — B.Tech Engineering Student, Cloud Computing & AI Enthusiast passionate about building innovative technology solutions.",
  openGraph: {
    title: "Mallangi Harinath Reddy | Engineering Creative Solutions",
    description:
      "Portfolio of Mallangi Harinath Reddy — B.Tech Engineering Student, Cloud Computing & AI Enthusiast passionate about building innovative technology solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mallangi Harinath Reddy | Engineering Creative Solutions",
    description:
      "Portfolio of Mallangi Harinath Reddy — B.Tech Engineering Student, Cloud Computing & AI Enthusiast passionate about building innovative technology solutions.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
