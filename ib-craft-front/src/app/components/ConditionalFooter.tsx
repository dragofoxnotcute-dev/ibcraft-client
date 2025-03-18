"use client"; // Указываем, что это клиентский компонент

import { usePathname } from "next/navigation";
import Footer from "./Footer/Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin"); 


  return !isAdminPage ? <Footer /> : null;
}