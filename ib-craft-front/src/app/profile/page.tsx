"use client";

import style from "./profile.module.css";
import Dropdown from "../components/Dropdown/Dropdown";
import ProtectedRoute from "../components/Auth/ProtectedRoute";
import BubbleControler from "../components/EffectComponents/BubbleControler";
import { useAuth } from "../components/Auth/AuthContext";
import User from "../hook/IUser";
import StatusBlock from "../components/statusblock/StatusBlock";
import ButtonQuestionnaireLink from "../components/statusblock/ButtonQuestionnaireLink";
import Image from "next/image";
import icouser from "@static/GkSrQGFXUAA0Ar_.png"


const Profile = ({ avatarIco, name, id }: User) => {
       return (
        <main>
            <div className="container">
                <div className={style.profile_container}>
                    <div className={style.profile_block}>
                        <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                            <div className={style.profile_avatar} style={{height: "100px", width: "100px"}}>
                                {avatarIco ? <img src={avatarIco} alt="avatar" className={style.avatar}/> : <Image src={icouser} alt="avatar" className={style.avatar}/>
                            }
                            </div>
                            <div className={style.profile}>
                                <div className={style.profile_info}>
                                    <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                                        {name ? <p className={style.context_user}>{name}</p> : <p className={style.context_user}></p>}
                                        <Dropdown>
                                                <a href="#" style={{color: "#fff", fontWeight: "bold"}}>Сменить никнейм</a>
                                                <a href="#" style={{color: "#fff", fontWeight: "bold"}}>Сменить аватар</a>
                                                <a href="#" style={{color: "#fff", fontWeight: "bold"}}>Выйти из аккаунта</a>
                                        </Dropdown>
                                    </div>
                                    <div style={{width: "340px"}}>
                                        <ButtonQuestionnaireLink Id={id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.status_block}>
                            {id ? <StatusBlock userId={id}/> : <></>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
)
};

export default function ProfilePage() {
    BubbleControler();
    const { user } = useAuth();
    
    return (
        <ProtectedRoute>
            <Profile {...user} />
        </ProtectedRoute>
    );
 }