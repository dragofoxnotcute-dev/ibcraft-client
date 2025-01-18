"use client";

import { useEffect } from "react";
import style from "./profile.module.css";
import SubmitButton from "../components/Buttons/SubmitButton";
import Dropdown from "../components/Dropdown/Dropdown";

export default function Profile() {

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
            <div className="container">
                <div className={style.profile_container}>
                    <div className={style.profile_block}>
                        <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                            <div className={style.profile_avatar} style={{height: "100px", width: "100px"}}>
                                <img src="https://cdn.discordapp.com/avatars/280288972331155456/92067daa8c50242ed8ca505d51ecfd4f.png?size=2048" alt="avatar" width={100} height={100} className={style.avatar} />
                            </div>
                            <div className={style.profile}>
                                <div className={style.profile_info}>
                                    <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                                        <p className={style.context_user}>Username</p>
                                        <Dropdown>
                                                <a href="#" style={{color: "#fff", fontWeight: "bold"}}>Сменить никнейм</a>
                                                <a href="#" style={{color: "#fff", fontWeight: "bold"}}>Выйти из аккаунта</a>
                                        </Dropdown>
                                    </div>
                                    <div style={{width: "340px"}}>
                                        <SubmitButton onClick={() => {}} disabled={false} loading={false} icon={""} href="/profile/get-pass">Подать на получение проходки</SubmitButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.status_block}>
                            <div className={style.status}>
                                <div className={style.status_item}>
                                    <div className={style.status_header}>
                                        <span className={style.status_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
                                                <path d="m7.7773 2.5h84.445c2.9141 0 5.2773 2.3633 5.2773 5.2773v84.445c0 2.9141-2.3633 5.2773-5.2773 5.2773h-84.445c-2.9141 0-5.2773-2.3633-5.2773-5.2773v-84.445c0-2.9141 2.3633-5.2773 5.2773-5.2773zm32.168 29.984c-2.0625-2.0625-5.4023-2.0625-7.4609 0-2.0625 2.0586-2.0625 5.4023 0 7.4609l10.055 10.055-10.055 10.055c-2.0625 2.0625-2.0625 5.4023 0 7.4648 2.0625 2.0586 5.4023 2.0586 7.4609 0l10.055-10.055 10.055 10.055c2.0625 2.0586 5.4023 2.0586 7.4648 0 2.0586-2.0625 2.0586-5.4023 0-7.4648l-10.055-10.055 10.055-10.055c2.0586-2.0625 2.0586-5.4023 0-7.4609-2.0625-2.0625-5.4023-2.0625-7.4648 0l-10.055 10.055z" fillRule="evenodd"/>
                                            </svg>
                                        </span>
                                        <h1 className={style.context_status}>Статус заявки</h1>
                                    </div>
                                    <div className={style.info_status}>
                                        <p className={style.status_text}>Не подана</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }