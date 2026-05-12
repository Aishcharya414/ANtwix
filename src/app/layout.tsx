import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ANtwix | Modern Web Development Agency",
  description: "ANtwix designs and builds high-performance websites and applications tailored for growth. We blend cutting-edge tech with stunning design.",
  keywords: ["web development", "nextjs", "react", "ui/ux design", "antwix", "agency"],
  authors: [{ name: "ANtwix Team" }],
  openGraph: {
    title: "ANtwix | Modern Web Development Agency",
    description: "ANtwix designs and builds high-performance websites and applications tailored for growth.",
    url: "https://antwix.com",
    siteName: "ANtwix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANtwix | Modern Web Development Agency",
    description: "ANtwix designs and builds high-performance websites and applications tailored for growth.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
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
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
