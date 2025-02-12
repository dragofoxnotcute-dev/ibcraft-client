"use client";

import style from "./profile.module.css";
import SubmitButton from "../components/Buttons/SubmitButton";
import Dropdown from "../components/Dropdown/Dropdown";
import ProtectedRoute from "../components/Auth/ProtectedRoute";
import BubbleControler from "../components/EffectComponents/BubbleControler";
import { useAuth } from "../components/Auth/AuthContext";
import User from "../hook/IUser";


const Profile = ({ avatarIco, name }: User) => {
    return (
        <main>
            <div className="container">
                <div className={style.profile_container}>
                    <div className={style.profile_block}>
                        <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                            <div className={style.profile_avatar} style={{height: "100px", width: "100px"}}>
                                {avatarIco ? <img src={avatarIco} alt="avatar" className={style.avatar}/> : <img src="https://pbs.twimg.com/profile_images/1860801420510793728/adaqs3h4_400x400.jpg" alt="avatar" className={style.avatar}/>
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
                                        <SubmitButton onClick={() => {}} disabled={false} loading={false} icon={""} href="/profile/get-pass">Подать на получение проходки</SubmitButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.status_block}>
                            
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