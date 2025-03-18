"use client";

import DevBlock from "../components/development/Devblock";
import BubbleDisable from "../components/EffectComponents/BubbleControler";

export default function Rule() {
    BubbleDisable();

    return (
        <div style={{height: "100vh"}}>
            <DevBlock />
        </div>
    )
}