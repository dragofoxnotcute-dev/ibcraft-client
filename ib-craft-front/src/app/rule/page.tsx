"use client";

import { useEffect } from "react";
import style from "./rule.module.css";

export default function Rule() {

    useEffect(() => {
        const bubbleContainer = document.getElementById('bubble-container');
        document.body.style.background = "#13061E";

        if (bubbleContainer) {
            bubbleContainer.classList.add(style.disabled);
        }

        return () => {
            if (bubbleContainer) {
                bubbleContainer.classList.remove(style.disabled);
            }
        };
    });

    return (
        <div style={{height: "100vh"}}>
            <h1>Rule page</h1>
        </div>
    )
}