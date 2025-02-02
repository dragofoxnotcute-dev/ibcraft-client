"use client";

import Alert from "@/app/components/alert/succesAlert";
import { useAuth } from "@/app/components/Auth/AuthContext";
import ProtectedRoute from "@/app/components/Auth/ProtectedRoute";
import BubbleControler from "@/app/components/EffectComponents/BubbleControler";
import FormPass from "@/app/components/forms/formspass";



export default function GetPenetrationPage() {
    BubbleControler();
    const { alertMessage, alertColor, alertSuccess } = useAuth();

    return (
        <ProtectedRoute>
             {alertMessage && (
                <Alert Success={alertSuccess} Color={alertColor}>
                    {alertMessage}
                </Alert>
            )}

            <main>
                <div className="container">
                    <FormPass />
                </div>
            </main>
        </ProtectedRoute>
    )
}