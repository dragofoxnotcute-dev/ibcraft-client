"use client"

import Backgraund from "@/app/components/backgraund";
import Loader from "@/app/components/Loader";
import { fetctTokenReset } from "@/app/hook/hookUser";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function ResetPassword() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email");
    const token = searchParams.get("token");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [check, setCheck] = useState<boolean | undefined>();
    Backgraund();


    const tokenCheck = async (token: string, email: string) => {
        const response = await fetctTokenReset({token, email});
        if (response.status !== 200) {
            console.log(response.data);
            return setCheck(false);
        }

        if (response.data) {
            return setCheck(true);
        }

        console.log(response.data);
        return setCheck(false);
    }

    useEffect(() => {
        if (token && email) {
            tokenCheck(token, email);
        } else {
            setCheck(false);
        }
           
    }, [token, email]);

    return (
        <>
            {check === undefined && (
                <div className="container">
                    <Loader />
                </div>
            )}

            {check === true && (
                <div className="container">
                    <h1>Смена пароля</h1>
                </div>
            )}

            {check === false && (
                <div className="container">
                     <h1>Ошибка</h1>
                </div>
            )}
        </>
    )



}