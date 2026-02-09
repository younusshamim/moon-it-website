import NextProgress from "@/components/next-progress";
import { ThemeProvider } from "@/config/theme-provider";
import { HindSiliguri } from "@/lib/fonts/fonts";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
// import InitialPopup from "@/components/initial-popup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'মুন আইটি - Best Computer & Language Training in Feni | Moon IT',
    template: '%s - মুন আইটি | Moon IT',
  },
  description:
    "মুন আইটি বৃহত্তর ফেনী/নোয়াখালীতে সর্বোচ্চ আসন ও ডিপার্টমেন্ট সমৃদ্ধ ট্রেনিং ইনস্টিটিউট। অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ‘মুন আইটি’ প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। যোগাযোগ- 01785882381 | মুন আইটি ট্রেনিং ইনস্টিটিউট - Moon IT Training Institute",
  keywords: [
    "Moon IT", "Moon IT training", "Moon IT training institute", "Moon IT Feni", "Moon IT training institute Feni", "MoonIT", "MoonIT Feni", "মুন আইটি", "মুন আইটি ফেনী", "মুন আইটি ট্রেনিং", "মুন আইটি ট্রেনিং ইনস্টিটিউট", "মুন আইটি ফেনী ট্রেনিং", "মুন আইটি ট্রেনিং ইনস্টিটিউট ফেনী", "best computer training center in Feni", "top computer training institute in Feni", "computer training Feni", "language training Feni", "IT courses Feni", "graphics design", "digital marketing", "AutoCAD", "office application", "networking", "web development", "web design", "spoken English", "Arabic language", "Korean language", "Japanese language", "German language", "fine arts in Feni", "ICT in Feni", "1-year diploma in fine arts in Feni", "1-year diploma in ICT in Feni", "1-year diploma course in Feni"
  ],
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Moon IT training institute',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      // 💡 Prevent next-themes hydration warning
      suppressHydrationWarning
      lang="en"
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body
        // 💡 Prevent hydration warnings caused by third-party extensions, such as Grammarly.
        suppressHydrationWarning
        className={`${HindSiliguri.className} font-medium bg-background`}
      >
        <ThemeProvider>
          <NextProgress />
          <Toaster />
          {/* <InitialPopup /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
