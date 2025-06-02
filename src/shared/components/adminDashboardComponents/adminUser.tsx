import Image from "next/image"
import AdminNavUser from "./adminNavUser"
import style from "./adminUser.module.css"
import user_ico from "@static/user.svg"

export default function AdminUsers() {
    return (
        <>
            <div className="container">
                <div className={style.main_users}>
                    <div className={style.UsersBlock}>
                        <AdminNavUser />
                        <ul className={style.itemsListUser}>
                            <li>
                                <input type="checkbox" name="" id="" />
                                <Image src={user_ico} width={25} height={27} alt="user" />
                                <a href="" className={style.user_name}>IlyaBot</a>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" />
                                <Image src={user_ico} width={25} height={27} alt="user" />
                                <a href="" className={style.user_name}>Dragofox</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}