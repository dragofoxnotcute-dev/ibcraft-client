"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Auth() {
    const navigate = useRouter();
    useEffect(() => {
        navigate.push("/auth/login");
    }, [navigate]);
    return (
        <>
            <div style={{height: "100vh"}}>
                <p>Перенаправление...</p>
            </div>
        </>
    )
}