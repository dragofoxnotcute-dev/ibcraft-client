"use client"
import { useEffect } from "react"
import style from "./pass.module.css"

export default function GetPenetration() {

    useEffect(() => {
        document.body.style.background = "#13061E";
    })
    return (
        <div className={style.main}>
            <div className="container">
                <div className={style.form_block}>
                    <div className={style.from_data_age}>
                        <div className={style.inputs_age}>
                            <p className={style.placeholder_input}>Ваш возраст</p>
                            <input type="text" className={style.input} />
                            <p className={style.discripton}>Сколька вам полных лет</p>
                        </div>
                        <div className={style.inputs_playing}>
                            <p className={style.placeholder_input}>Как долго вы играете в Minecraft</p>
                            <input type="text" className={style.input} />
                            <p className={style.discripton}>Укажите, сколька лет вы играете Minecraft</p>
                        </div>
                    </div>
                    <div className={style.from_checkboxs}>
                        <div className={style.context_check}>
                            <p className={style.placeholder_input}>Вы ознакомлены с правилами сервера?</p>
                            <div className={style.checkbox_block}>
                                <div>
                                    <input type="radio" placeholder="Да" className={style.checkbox_input} id="accept" value="1" name="rule" />
                                    <label htmlFor="accept">Да</label>
                                </div>
                                <div>
                                    <input type="radio" placeholder="Нет" className={style.checkbox_input} id="notaccept" value="1" name="rule" />
                                    <label htmlFor="notaccept">Нет</label>
                                </div>
                            </div>
                        </div>
                        <div className={style.context_check}>
                            <p className={style.placeholder_input}>Вы когда ни будь играли до этого на РП серверах?</p>
                            <div className={style.checkbox_block}>
                                <div>
                                    <input type="radio" placeholder="Да" className={style.checkbox_input} id="accept" value="1" name="playing" />
                                    <label htmlFor="accept">Да</label>
                                </div>
                                <div>
                                    <input type="radio" placeholder="Нет" className={style.checkbox_input} id="notaccept" value="1" name="playing" />
                                    <label htmlFor="notaccept">Нет</label>
                                </div>
                            </div>
                        </div>
                        <div className={style.context_check}>
                            <p className={style.placeholder_input}>У вас есть лицензия Minecraft?</p>
                            <div className={style.checkbox_block}>
                                <div>
                                    <input type="radio" placeholder="Да" className={style.checkbox_input} id="accept" value="1" name="license" />
                                    <label htmlFor="accept">Да</label>
                                </div>
                                <div>
                                    <input type="radio" placeholder="Нет" className={style.checkbox_input} id="notaccept" value="1" name="license" />
                                    <label htmlFor="notaccept">Нет</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}