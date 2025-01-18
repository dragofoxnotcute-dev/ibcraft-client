import AuthContainer from "@/app/components/BlockAuth/AuthContainer";
import RegisterBlock from "@/app/components/BlockAuth/RegisterBlock";

export default function Register() {
    return (
        <>
            <AuthContainer>
                <RegisterBlock />
            </AuthContainer>
        </>
    )
}