"use client";

import { useAlert } from "@/app/components/alert/alertContext";
import Alert from "@/app/components/alert/succesAlert";
import { useAuth } from "@/app/components/Auth/AuthContext";
import ProtectedRoute from "@/app/components/Auth/ProtectedRoute";
import BubbleControler from "@/app/components/EffectComponents/BubbleControler";
import FormPass from "@/app/components/forms/formspass";
import ProtectedForm from "@/app/components/forms/ProtectedForm";



export default function GetPenetrationPage() {
    BubbleControler();
    const { alertMessage, alertColor, alertSuccess } = useAlert();
    const { user } = useAuth();

    return (
        <ProtectedRoute>
            <ProtectedForm userId={user?.id}>
                <>
                {alertMessage && (
                    <Alert Success={alertSuccess} Color={alertColor}>
                        {alertMessage}
                    </Alert>
                )}
                    <FormPass />
                </>
            </ProtectedForm>
        </ProtectedRoute>
    )
}