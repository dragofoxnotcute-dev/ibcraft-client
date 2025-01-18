"use client";

import LoginBlock from "@/app/components/BlockAuth/LoginBlock";
import AuthContainer from "@/app/components/BlockAuth/AuthContainer";
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
