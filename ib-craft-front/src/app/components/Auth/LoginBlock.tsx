
import Image from "next/image";
import lock from "@static/3d-lock.png"
import style from "./auth.module.css"
import Link from "next/link";
import SubmitButton from "../Buttons/SubmitButton";
import { useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

function LoginBlock() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect') || '/';

    const handleSubmit = async () => {
        setLoading(true);
        console.log('Email:', email);
        try {
            const payload = {
                email,
                password,
            };
            const api = process.env.NEXT_PUBLIC_SERVER_URL_HTTP;
            await axios.post(api + '/login', payload, { withCredentials: true });
            router.push(redirect)
        } catch (error) {
            console.error('Error sending data:', error);
            setError('An error occurred while sending data.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className={style.title_auth}>
                <Image className={style.lock_img} src={lock} alt="" />
                <h1 className={style.media_text}>Вход</h1>
            </div>
            <div className={style.buttons}>
                <div className={style.group_auth_input}>
                    <input type="email" placeholder="Email" 
                    className={style.from_auth} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Пароль" 
                    className={style.from_auth} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {error && <p className={style.error}>{error}</p>}
                <div className={style.group_auth_btn}>
                    <SubmitButton onClick={handleSubmit} 
                    disabled={loading} 
                    loading={false} 
                    icon={""} >Войти</SubmitButton>
                    <SubmitButton onClick={() => {
                        
                    }} disabled={loading} loading={false} icon={""} className={style.auth_btn_discord}>
                        <span id={style.discord}></span>
                    </SubmitButton>
                </div>
                <div className={style.support_group}>
                    <Link href="/auth/register" className={style.support_btn}>Зарегистрироваться</Link>
                    <a href="!#" className={style.support_btn}>Восстановить доступ</a>
                </div>
            </div>
        </>
    )
}

export default LoginBlock;