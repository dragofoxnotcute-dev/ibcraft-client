"use client"

import { fetchCheckToken, fetchUser } from "@/app/hook/hookUser";
import User from "@/app/hook/IUser";
import { useEffect, useState, createContext, useContext } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Loader from "../Loader";


interface AuthContextType {
    user: any;
    isAuth?: boolean;
    alertMessage?: string | null;
    alertColor?: string;
    alertSuccess?: boolean;
    login: () => void;
    logout: () => void;
    redirectLogin: (redirect: string) => void;
    setAlert: (message: string, color: string) => void;
    clearAlert: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children } : {children: React.ReactNode}) => {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [isAuth, setIsAuth] = useState<boolean | null>(null);
    const [redirectUri, setRedirect] = useState<string | null>(null);

    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [alertColor, setAlertColor] = useState<string>("green");
    const [alertSuccess, setAlertSuccess] = useState<boolean>(false);

    useEffect(() => {
        const verifyUser = async () => {
            try {
                
                const response = await fetchCheckToken();
                if (response.status === 200) {
                    const user = await fetchUser();
                    setUser(user);
                    return;
                }else {
                    setUser(null);
                    setIsAuth(false);
    
                    if (redirectUri)
                        router.push(redirectUri);
                }

               
            } catch {
                setUser(null);
                setIsAuth(false);
            }
        }


        const token  = Cookies.get("dragonkey");
        if (token)
            setIsAuth(true);
            verifyUser();
    }, []);


    if (isAuth === null) {
        return <div><Loader/></div>;
    }

    const login = async () => {
        setIsAuth(true);
        const user = await fetchUser();
        setUser(user);
    }

    const logout = () => {
        setIsAuth(false);
        Cookies.remove("dragonkey");
    }

    const redirectLogin = (redirect: string) => {
        setRedirect(redirect);
        if (redirectUri)
            router.push(redirectUri)
    }

    const setAlert = (message: string, color: string) => {
        setAlertMessage(message);
        setAlertColor(color);
        setAlertSuccess(true);
        setTimeout(() => {
            setAlertSuccess(false);
        }, 3000);
        
    };

    const clearAlert = () => {
        setAlertMessage(null);
        setAlertSuccess(false);
    };

    return (
        <AuthContext.Provider value={{ 
        user, 
        isAuth,
        alertMessage, 
        alertColor, 
        alertSuccess,
        login, 
        logout, 
        redirectLogin,
        setAlert, 
        clearAlert  }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
}
