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
  title: "Dev Academy - Learn Coding & Web Development",
  description: "Join Dev Academy to access high-quality coding courses, track your progress, and get certified. Learn web development, programming, and more with real-world projects.",
  keywords: ["Dev Academy", "Coding Courses", "Web Development", "Programming", "Online Learning", "JavaScript", "React", "Next.js", "Frontend", "Backend"],
  authors: [{ name: "Zeanur Rahaman Zeon", url: "https://www.linkedin.com/in/zeanur-rahaman-zeon/" }],
  // openGraph: {
  //   title: "Dev Academy – Learn Coding & Web Development",
  //   description: "Join Dev Academy to access high-quality coding courses, track your progress, and get certified.",
  //   url: "https://devacademy.com",
  //   siteName: "Dev Academy",
  //   images: [
  //     {
  //       url: "/og-image.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Dev Academy - Learn Coding & Web Development",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Dev Academy - Learn Coding & Web Development",
  //   description: "Access coding courses, projects, and certifications with Dev Academy.",
  //   images: ["/og-image.png"],
  // },
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
