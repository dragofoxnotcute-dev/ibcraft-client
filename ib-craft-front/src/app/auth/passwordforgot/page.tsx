"use client";

import AuthContainer from "@/app/components/Auth/AuthContainer";
import PasswordForgotBlock from "@/app/components/Auth/PasswordForgot";
import BubbleBackground from "@/app/components/EffectComponents/BubbleContainer";
import { useAlert } from "@/app/components/alert/alertContext";
import Alert from "@/app/components/alert/succesAlert";

export default function PasswordForgot() {
    const { alertMessage, alertColor, alertSuccess } = useAlert();
    
    return (
        <>
            {alertMessage && (
                <Alert Success={alertSuccess} Color={alertColor}>
                    {alertMessage}
                </Alert>
            )}
            <BubbleBackground />
            <AuthContainer>
                <PasswordForgotBlock />
            </AuthContainer>
        </>
    )
}