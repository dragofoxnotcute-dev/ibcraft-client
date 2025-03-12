"use client"

import { useEffect } from "react";
import DevBlock from "../components/development/Devblock";
import style from "./howplay.module.css"

export default function HowPlaying() {
    
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
            <DevBlock />
        </div>
    )
}