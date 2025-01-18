"use client";

import Image from "next/image";
import lock from "../../static/3d-lock.png"
import style from "./auth.module.css"
import Link from "next/link";
import SubmitButton from "../Buttons/SubmitButton";

function RegisterBlock() {
    return (
        <>
            <div className={style.title_auth}>
                <Image className={style.lock_img} src={lock} alt="" />
                <h1 className={style.media_text}>Регистрация</h1>
            </div>
            <div className={style.buttons}>
                <div className={style.group_auth_input}>
                    <input type="email" placeholder="Email" className={style.from_auth}/>
                    <input type="password" placeholder="Пароль" className={style.from_auth}/>
                    <input type="password" placeholder="Пароль еще раз" className={style.from_auth}/>
                </div>
                <div className={style.group_auth_btn}>
                    <div>
                        <input type="checkbox" id="checkrule" className={style.checkbox}/>
                        <label htmlFor="checkrule" className={style.labelctx}>Я согласен с <Link href="/rule" id={style.link_rule}> правилами </Link> данного проекта</label>
                    </div>
                    <SubmitButton onClick={() => {

                    }} 
                    disabled={false} 
                    loading={false} 
                    icon={""} >Зарегистрироваться</SubmitButton>

                    <SubmitButton onClick={() => {
                        
                    }} disabled={false} loading={false} icon={""} className={style.auth_btn_discord}>
                        <span id={style.discord}></span>
                    </SubmitButton>
                </div>
                <div className={style.support_group}>
                    <Link href="/auth/login" className={style.support_btn}>Если есть профиль</Link>
                    <Link href="/auth/reset" className={style.support_btn}>Восстановить доступ</Link>
                </div>
            </div>
        </>
    )
}

export default RegisterBlock;