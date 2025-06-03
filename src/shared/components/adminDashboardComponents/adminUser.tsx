import Image from "next/image"
import AdminNavUser from "./adminNavUser"
import style from "./adminUser.module.css"
import user_ico from "@static/user.svg"
import dot_ico from "@static/icon_dots.svg"

export default function AdminUsers() {
    return (
        <>
            <div className="container">
                <div className={style.main_users}>
                    <div className={style.UsersBlock}>
                        <AdminNavUser />
                        <ul className={style.itemsListUser}>
                            <li className={style.itemUser}>
                               <div className={style.userTitle}>
                                    <input type="checkbox" name="" id="" />
                                    <Image src={user_ico} width={20} height={20} alt="user" />
                                    < i className='bx  bxs-crown'  ></i> 
                                    <a href="" className={style.user_name}>IlyaBot</a>
                               </div>
                               <div className={style.opt}>
                                    <a href="#" className={style.dropdown_btn}>
                                        <Image  src={dot_ico} width={7} height={28} alt="dot"/>
                                    </a>
                               </div>
                            </li>
                            <li className={style.itemUser}>
                                <div className={style.userTitle}>
                                    <input type="checkbox" name="" id="" />
                                    <Image src={user_ico} width={20} height={20} alt="user" />
                                    <a href="" className={style.user_name}>Dragofox</a>
                                </div>
                                <div className={style.opt}>
                                    <a href="#" className={style.dropdown_btn}>
                                        <Image  src={dot_ico} width={7} height={28} alt="dot"/>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}