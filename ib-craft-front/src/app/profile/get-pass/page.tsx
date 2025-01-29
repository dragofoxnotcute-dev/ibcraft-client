"use client";

import ProtectedRoute from "@/app/components/Auth/ProtectedRoute";
import BubbleControler from "@/app/components/EffectComponents/BubbleControler";
import FormPass from "@/app/components/forms/formspass";



export default function GetPenetrationPage() {
    BubbleControler();
    return (
        <ProtectedRoute>
            <main>
                <div className="container">
                    <FormPass />
                </div>
            </main>
        </ProtectedRoute>
    )
}