import "./globals.css";
import { Rajdhani, Rubik } from "next/font/google";
import Allscripts from "./allscripts";

import TopLinks from "@/components/topLinks";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
