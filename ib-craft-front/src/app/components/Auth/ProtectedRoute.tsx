"use client"

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const token = Cookies.get("dragonkey");
    const [isAutorized, setIsAutorized] = useState(true);


    const api = process.env.NEXT_PUBLIC_SERVER_URL_HTTP;
     const fetchCheckToken = async () => {
        try {
            const response = await axios.get(api + '/chack-token', { withCredentials: true,  headers: {
              'Accept': 'application/json',
          } });
            console.log('Server response:', response.data);
            setIsAutorized(true);
        } catch (error) {
          if (axios.isAxiosError(error) && error.response) {
            console.error('Ошибка запроса:', error.response.data); // Полный JSON-ответ
            console.error('Сообщение:', error.response.data.message); // Только текст ошибки
        } else {
            console.error('Ошибка сети:', error);
        }
        }
     }

    useEffect(() => { 

      if (!token) {
        router.push(`/auth/login?redirect=${pathname}`);
        setIsAutorized(false);
      } else {
        fetchCheckToken();
      }

      }, [router, pathname]);

    
      return <>{isAutorized ? children : null}</>;
}