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
    process.env.NEXT_PUBLIC_SITE_URL || "https://investfirst.ae",
  ),
  title: "Business Setup in UAE | Invest First Company Formation Dubai",
  description:
    "Start your business in the UAE with Invest First. We provide end-to-end business setup, company formation, trade license assistance, and PRO services in Dubai and across the UAE for entrepreneurs and investors.",
  openGraph: {
    title: "Invest First Business Services",
    description: "Expert company formation and business services in the UAE.",
    url: "https://investfirst.ae",
    siteName: "Invest First",
    images: [
      {
        url: "/images/og-home.jpeg",
        width: 1200,
        height: 630,
        alt: "Invest First Business Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest First Business Services",
    description: "Expert company formation and business services in the UAE.",
    images: ["/images/og-home.jpeg"],
  },
  appleWebApp: {
    title: "Invest First",
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
