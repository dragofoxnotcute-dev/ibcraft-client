import DevBlock from "../development/Devblock"
import style from "./adminUser.module.css"

export default function AdminUsers() {
    return (
        <>
            <div className="container">
                <div className={style.main_users}>
                    <div className={style.UsersBlock}>
                        <DevBlock height={"120vh"} />
                    </div>
                </div>
            </div>
        </>
    )
}