"use client";

import { useEffect, useState } from "react";
import style from "./dropdown.module.css";

interface DropdownProps {
    children: React.ReactNode;
}

export default function Dropdown({children}: DropdownProps) {
    const [show, setShow] = useState(false);

    const toggleDropdown = () => {
        setShow(!show);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const dropdown = document.getElementById('dropdown');
            if (dropdown && !dropdown.contains(event.target as Node)) {
                setShow(false);
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div id="dropdown" className={style.dropdown}>
                <a id="dropbtn" className={style.dropbtn} onClick={toggleDropdown}>
                    <span className={style.icon_down}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                </a>
                <div id="dropdown-content" className={`${style.dropdownContent} ${show ? style.show : ''}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}