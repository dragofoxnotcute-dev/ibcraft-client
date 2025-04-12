"use client"
import { useState } from "react";
import style from "./adminSideNav.module.css";


export default function AdminSideNav() {
   const [closeBar, setCloseBar] = useState(false);
   var handleClick = () => {
         const sidebar = document.getElementById("sidebar");
         if (sidebar) {
              sidebar.classList.toggle(style.closed);
              setCloseBar(!closeBar);
         }
   }
   return <>
        <nav className={`${style.sidebar} ${style.closed}`} id="sidebar">
            <header className={style.header}>
                <div className={style.image_text}>
                    <span className={style.image}>
                        <img src="/logo_new.jpg" alt="logo" />
                    </span>
                    <div className={` ${style.header_text} ${style.text} `}>
                        <span className={style.name}>IbCraft</span>
                        <span className={style.profession}> Admin Deshboard</span>
                    </div>
                </div>

                <i className={`bx bx-chevron-right ${style.toggle}`} onClick={handleClick}></i>
            </header>

            <div className={style.menu_bar}>
                <div className={style.menu}>
                    <ul className={style.nav_links}>
                        <li className={style.nav_link}>
                            <a href="#">
                                <i className={`bx bx-home-alt ${style.icon}`} ></i>
                                <span className={`${style.text} ${style.nav_text}`}>Главная</span>
                            </a>
                        </li>
                    </ul>
                    <ul className={style.nav_links}>
                        <li className={style.nav_link}>
                            <a href="#">
                                <i className={`bx bx-user ${style.icon}`} ></i>
                                <span className={`${style.text} ${style.nav_text}`}>Пользователи</span>
                            </a>
                        </li>
                    </ul>
                    <ul className={style.nav_links}>
                        <li className={style.nav_link}>
                            <a href="#">
                                <i className={`bx bx-bell ${style.icon}`} ></i>
                                <span className={`${style.text} ${style.nav_text}`}>Оповещение</span>
                            </a>
                        </li>
                    </ul>
                    <ul className={style.nav_links}>
                        <li className={style.nav_link}>
                            <a href="#">
                                <i className={`bx bx-notepad ${style.icon}`} ></i>
                                <span className={`${style.text} ${style.nav_text}`}>Заявки на проходку</span>
                            </a>
                        </li>
                    </ul>
                    <ul className={style.nav_links}>
                        <li className={style.nav_link}>
                            <a href="#">
                                <i className={`bx bx-cog ${style.icon}`} ></i>
                                <span className={`${style.text} ${style.nav_text}`}>Настрйки</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={style.bottom_content}>
                    <li className={style.nav_links}>
                        <a href="#">
                            <i className={`bx bx-log-out ${style.icon}`} ></i>
                            <span className={`${style.text} ${style.nav_text}`}>Выйти</span>
                        </a>
                    </li>
                    <li className={style.nav_links}>
                        <a href="#">
                            <i className={`bx bx-home ${style.icon}`} ></i>
                            <span className={`${style.text} ${style.nav_text}`}>Главная страница</span>
                        </a>
                    </li>
                </div>
            </div>
        </nav>
   </>
}