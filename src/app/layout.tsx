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
  title: "Mallangi Harinath Reddy | Cloud & DevOps Engineer | SRE",
  description:
    "Portfolio of Mallangi Harinath Reddy — Cloud & DevOps Engineer with hands-on experience in AWS, Docker, Kubernetes, Terraform, CI/CD, and AI-powered product development.",
  openGraph: {
    title: "Mallangi Harinath Reddy | Cloud & DevOps Engineer | SRE",
    description:
      "Portfolio of Mallangi Harinath Reddy — Cloud & DevOps Engineer with hands-on experience in AWS, Docker, Kubernetes, Terraform, CI/CD, and AI-powered product development.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mallangi Harinath Reddy | Cloud & DevOps Engineer | SRE",
    description:
      "Portfolio of Mallangi Harinath Reddy — Cloud & DevOps Engineer with hands-on experience in AWS, Docker, Kubernetes, Terraform, CI/CD, and AI-powered product development.",
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
