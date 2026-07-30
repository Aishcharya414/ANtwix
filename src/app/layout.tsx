import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SchemaOrgData from "@/components/SchemaOrgData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ANtwix Technologies | Modern Web Developers | Sri Lanka",
  description: "ANtwix designs and builds high-performance websites and applications tailored for growth. We blend cutting-edge tech with stunning design. Expert web development agency in Sri Lanka.",
  keywords: ["web development", "nextjs", "react", "ui/ux design", "antwix", "agency", "sri lanka", "web design", "software development"],
  authors: [{ name: "ANtwix Team" }],
  creator: "ANtwix",
  publisher: "ANtwix",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://antwix.lk"),
  alternates: {
    canonical: "https://antwix.lk",
  },
  openGraph: {
    title: "ANtwix Technologies | Modern Web Developers",
    description: "Expert web development and design agency. High-performance websites and applications built with cutting-edge technology.",
    url: "https://antwix.lk",
    siteName: "ANtwix",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://antwix.lk/og-image.png",
        width: 1200,
        height: 630,
        alt: "ANtwix Technologies - Modern Web Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANtwix Technologies | Modern Web Developers",
    description: "Expert web development and design agency. High-performance websites and applications built with cutting-edge technology.",
    images: ["https://antwix.lk/twitter-image.png"],
  },
  icons: {
    icon: "/logo-removebg.png",
    shortcut: "/logo-removebg.png",
    apple: "/logo-removebg.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google8115f5be466cc391",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <SchemaOrgData />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
