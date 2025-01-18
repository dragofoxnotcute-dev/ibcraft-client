"use client";

import LoginBlock from "@/app/components/BlockAuth/LoginBlock";
import AuthContainer from "@/app/components/BlockAuth/AuthContainer";

export default function Login() {
    return (
        <>
            <AuthContainer>
                <LoginBlock />
            </AuthContainer>
        </>
    )
 }
