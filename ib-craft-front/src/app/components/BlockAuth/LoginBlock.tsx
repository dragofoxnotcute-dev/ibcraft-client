
import Image from "next/image";
import lock from "../../static/3d-lock.png"
import style from "./auth.module.css"
import Link from "next/link";
import SubmitButton from "../Buttons/SubmitButton";

function LoginBlock() {
    return (
        <>
            <div className={style.title_auth}>
                <Image className={style.lock_img} src={lock} alt="" />
                <h1 className={style.media_text}>Вход</h1>
            </div>
            <div className={style.buttons}>
                <div className={style.group_auth_input}>
                    <input type="text" placeholder="Email" className={style.from_auth}/>
                    <input type="text" placeholder="Пароль" className={style.from_auth}/>
                </div>
                <div className={style.group_auth_btn}>
                    <SubmitButton onClick={() => {
                        
                    }} 
                    disabled={false} 
                    loading={false} 
                    icon={""} >Войти</SubmitButton>
                    <SubmitButton onClick={() => {
                        
                    }} disabled={false} loading={false} icon={""} className={style.auth_btn_discord}>
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