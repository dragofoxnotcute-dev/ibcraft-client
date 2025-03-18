import AuthContainer from "@/app/components/Auth/AuthContainer";
import RegisterBlock from "@/app/components/Auth/RegisterBlock";
import BubbleBackground from "@/app/components/EffectComponents/BubbleContainer";

export default function Register() {
    return (
        <>
            <BubbleBackground />
            <AuthContainer>
                <RegisterBlock />
            </AuthContainer>
        </>
    )
}