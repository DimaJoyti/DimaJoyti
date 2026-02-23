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
  title: "Dmitry Glushchenko | Senior Software Engineer",
  description: "Senior Software Engineer with 8+ years experience in Go, TypeScript, Node.js, Python. Cloud-native, microservices, AI/ML integration.",
  keywords: ["Golang", "TypeScript", "Node.js", "Python", "Senior Software Engineer", "Cloud-Native", "AI/ML"],
  authors: [{ name: "Dmitry Glushchenko" }],
  openGraph: {
    title: "Dmitry Glushchenko | Senior Software Engineer",
    description: "Senior Software Engineer specializing in Go, TypeScript, cloud-native systems, and AI/ML",
    type: "website",
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
