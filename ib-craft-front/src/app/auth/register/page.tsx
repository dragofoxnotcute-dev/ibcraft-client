import AuthContainer from "@/app/components/BlockAuth/AuthContainer";
import RegisterBlock from "@/app/components/BlockAuth/RegisterBlock";
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