"use client"

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import Cookies from "js-cookie";
import { useAuth } from "./AuthContext";


export default function ProtectedRoute({ children }: { children: ReactNode}) {
   ;
    const pathname = usePathname();
    const router = useRouter();
    const { isAuth } = useAuth();
    useEffect(() => { 
      if (!isAuth) {
        router.push(`/auth/login?redirect=${pathname}`);
      } 
      }, [isAuth, router, pathname]);

      if (isAuth === null) return <div>Загрузка...</div>;

      return <>{children}</>;
}