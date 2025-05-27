import "./globals.css";
import { Rajdhani, Rubik } from "next/font/google";
import Allscripts from "./allscripts";

import TopLinks from "@/components/topLinks";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { Metadata } from "next";
import { appConfig } from "../../app.config";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--accent-font",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--default-font",
});

export const metadata: Metadata = {
  title: appConfig.seo.title,
  description: appConfig.seo.description,
  keywords: appConfig.seo.keywords,
  authors: [{ name: appConfig.seo.author }],
  creator: appConfig.seo.creator,
  publisher: appConfig.seo.publisher,

  openGraph: {
    title: appConfig.seo.title,
    description: appConfig.seo.description,
    url: appConfig.site.url,
    siteName: appConfig.site.name,
    images: [
      {
        url: appConfig.images.ogImage,
        width: 1200,
        height: 630,
        alt: `${appConfig.site.name} Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: appConfig.images.favicon,
    apple: appConfig.images.appleTouchIcon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${rubik.variable}`}>
      <body>
        <TopLinks />
        <Header />
        <main>{children}</main>
        <Footer />
        <Allscripts />
      </body>
    </html>
  );
}
