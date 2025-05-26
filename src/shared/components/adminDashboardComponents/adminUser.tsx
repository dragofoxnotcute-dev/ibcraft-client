import DevBlock from "../development/Devblock"
import style from "./adminUser.module.css"

export default function AdminUsers() {
    return (
        <>
            <div className="container">
                <div className={style.main_users}>
                    <div className={style.UsersBlock}>
                        <nav className={style.bartools}>
                            <ul className={style.items_tools}>
                                <li className={style.list_item}>
                                    <a href="">
                                        < i className={`bx  bx-trash-alt ${style.icon}`}  ></i> 
                                        <span>Добавить</span>
                                        <span>пользователя</span>
                                    </a>
                                </li>
                                <li className={style.list_item}>
                                    <a href="">
                                        <i className={`bx  bx-plus-circle ${style.icon}`}></i> 
                                        <span>Удалить</span>
                                        <span>выбраное</span>
                                    </a>
                                </li>
                                <li className={style.list_item}>
                                    <a href="">
                                        < i className={`bx  bx-search-alt ${style.icon}`}  ></i>  
                                        <span>Поиск</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className={style.pages}>
                                <li className={style.pages_item}>
                                    <a href="" className={`${style.nav_link} ${style.disable}`}>
                                        < i className='bx  bx-chevron-left'  ></i> 
                                    </a>
                                </li>
                                <li className={style.pages_title}>
                                    1 из 1
                                </li>
                                <li className={style.pages_item}>
                                    <a href="" className={style.nav_link}>
                                        < i className='bx  bx-chevron-right'  ></i> 
                                    </a>
                                </li>
                                       
                            </ul>
                        </nav>
                        {/* <DevBlock height={"120vh"} /> */}
                    </div>
                </div>
            </div>
        </>
    )
}