import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { organizationSchema } from "@/lib/schema";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/ui/PageLoader";
import SmoothScroller from "@/components/ui/SmoothScroller";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  appleWebApp: {
    title: "invest first",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <SmoothScroller />
        <PageLoader />
        <SchemaOrg schema={organizationSchema} />
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
