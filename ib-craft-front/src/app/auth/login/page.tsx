"use client";

import LoginBlock from "@/app/components/Auth/LoginBlock";
import AuthContainer from "@/app/components/Auth/AuthContainer";
import BubbleBackground from "@/app/components/EffectComponents/BubbleContainer";

export default function Login() {
    return (
        <>
            <BubbleBackground />
            <AuthContainer>
                <LoginBlock />
            </AuthContainer>
        </>
    )
 }
