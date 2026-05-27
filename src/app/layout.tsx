import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'Suncoast Plumbing | Trusted Local Plumbers for Residential & Commercial',
  description: 'Suncoast Plumbing provides reliable, professional, and affordable plumbing services including leak detection, water heater repair, drain cleaning, and 24/7 emergency support across the Suncoast region.',
  keywords: ["plumber, plumbing, Suncoast, emergency plumber, leak repair, water heater, drain cleaning, residential plumbing, commercial plumbing"],
  openGraph: {
    "title": "Suncoast Plumbing | Trusted Local Plumbers for Residential & Commercial",
    "description": "Suncoast Plumbing provides reliable, professional, and affordable plumbing services including leak detection, water heater repair, drain cleaning, and 24/7 emergency support across the Suncoast region.",
    "url": "https://suncoastplumbing.com",
    "siteName": "Suncoast Plumbing",
    "images": [
      {
        "url": "asset://hero-main-image",
        "alt": "Suncoast Plumbing team member smiling"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Suncoast Plumbing | Trusted Local Plumbers for Residential & Commercial",
    "description": "Suncoast Plumbing provides reliable, professional, and affordable plumbing services including leak detection, water heater repair, drain cleaning, and 24/7 emergency support across the Suncoast region.",
    "images": [
      "asset://hero-main-image"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
