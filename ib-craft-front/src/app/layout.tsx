import type { Metadata } from "next";
import localFont from "next/font/local";
import "@styles/reset.css";
import "@styles/globals.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./components/Auth/AuthContext";
import Alert from "./components/alert/succesAlert";



const Oxygen = localFont({
  src: "../../src/shared/fonts/OxygenRegular.woff",
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
        <AuthProvider>
          <Header/>
          {children}
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
