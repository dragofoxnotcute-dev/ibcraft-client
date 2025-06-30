import style from "./adminNav.module.css"

export default function AdminNavUser() {
    return <>
        <nav className={style.bartools}>
            <ul className={style.items_tools}>
                <li className={style.list_item}>
                    <a href="">
                        <i className={`bx  bx-plus-circle ${style.icon}`}></i> 
                        <span>Добавить</span>
                        <span>пользователя</span>
                    </a>
                </li>
                <li className={style.list_item}>
                    <a href="">
                        < i className={`bx  bx-trash-alt ${style.icon}`}  ></i>
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
    </>
}