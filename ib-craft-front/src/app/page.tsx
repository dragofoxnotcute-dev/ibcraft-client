"use client";

import { useEffect } from "react";
import CardBlock from "./components/CardBlock/CardBlock";
import MainBlock from "./components/MainBlock/MainBlock";
import QuestionsBlock from "./components/questionsBlock/QuestionsBlock";
import TitleBlock from "./components/titleBlock/TitleBlock";
import styles from "./page.module.css";
import BubbleBackground from "./components/EffectComponents/BubbleContainer";
import Header from "./components/Header/Header";

export default function Home() {
  useEffect(() => {
    document.body.style.cssText = `
      backgraund: linear-gradient(162deg, rgba(151, 71, 255, 0.20) 0%, rgba(33, 11, 52, 0.20) 49.72%, rgba(135, 0, 255, 0.20) 98.15%), #210B34;
    `
    
  });

  return (
    <div className={styles.page}>
      <BubbleBackground />
      <MainBlock/>
      <TitleBlock/>
      <CardBlock/>
      <QuestionsBlock/>
    </div>
  );
}
