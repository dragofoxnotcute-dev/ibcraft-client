"use client";

import { useState } from "react";
import style from "./mainblock.module.css";
import Link from "next/link";
import OptionsButton from "../Buttons/OptionsButton";

function MainBlock() {
    const [copySuccess, setCopySuccess] = useState(false);

    const textIp = 'mc.ibcraft.ru';

    const hadleCopyClick = () => {
        navigator.clipboard.writeText(textIp)
            .then(() => {
                console.log("Text copied to clipboard!");
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000);
            })
            .catch((error) => {
                console.error('Error copying text: ', error);
            });
    };

    return (
        
        <div className={style.main}>
            <div className="container">
                <div className={`${style.clip}  ${copySuccess ? style.active_clip : ""}`}>
                    <div className={`${style.clipboard}`}>
                        <div className={style.text_title}>
                            ✅ Скопировано!
                        </div>
                    </div>
                </div>
                    

                <div className={style.wrapper}>
                    <div className={style.discription_block}>
                        <p className={style.discription_context}>
                            Ванильный <span>полу-РП сервер</span> Minecraft на версии 
                            1.20.1 для любителей классического выживания с парочкой небольших плагинов 
                        </p>
                    </div>
                    <div className={style.options_block}>

                        <OptionsButton onClick={hadleCopyClick} disabled={false} loading={false}  icon={""} href="#" className={style.ip_btn}>
                            <span className={style.icon_option}>
                                <svg width="21px" height="21px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#000000" d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"/><path fill="#000000" d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"/>
                                </svg>
                            </span>
                            Скопировать IP
                        </OptionsButton>
                        <ul className={style.option_button_items}>
                            <li className={style.item_main_btn}>
                                <a href="#!" className={style.main_btn}>Получить проходку<span id={style.user_ico}></span></a>
                            </li>
                            <li className={style.item_main_btn}>
                                <Link href="/profile" className={style.main_btn}>Скачать сборку<span id={style.download_ico}></span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainBlock;