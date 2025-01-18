import type { Metadata } from "next";
import localFont from "next/font/local";
import "./reset.css"
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BubbleBackground from "./components/EffectComponents/BubbleContainer";

const Oxygen = localFont({
  src: "./fonts/OxygenRegular.woff",
  variable: "--font-oxygen-sans",
  weight: "100 900 bold",
});


export const metadata: Metadata = {
  title: "Ib-craft",
  description: "Ibcraft web site",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${Oxygen.variable} soid`}>
        <Header/>
        <div className="container">
          <BubbleBackground />
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
