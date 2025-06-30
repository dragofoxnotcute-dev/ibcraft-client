"use client";

import Image from "next/image"
import AdminNavUser from "./adminNavUser"
import style from "./adminNav.module.css"
import user_ico from "@static/user.svg"
import dot_ico from "@static/icon_dots.svg"
import Dropdown from "../Dropdown/Dropdown"
import { useEffect, useRef, useState } from "react"
import AdminContainer from "./adminContainer";

// Mock data for users
const users = [
    {"name": "IlyaBot", "role": "Admin"}, 
    {"name": "Dragofox", "role": "User"}];

export default function AdminUsers() {

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLUListElement>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setOpenIndex(null); // Закрыть всё
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
           <AdminContainer>
                <AdminNavUser />
                <ul ref={containerRef} className={style.itemsListUser}>
                    {users.map((user, index) => (
                        <li key={index} className={style.itemUser}>
                            <div className={style.userTitle}>
                                    <input type="checkbox" name="" id="" />
                                    <Image src={user_ico} width={20} height={20} alt="user" />
                                    {user.role === "Admin" && < i className='bx  bxs-crown'  ></i> }
                                    <a href="" className={style.user_name}>{user.name}</a>
                            </div>
                            <div className={style.opt}>
                                    <Dropdown isOpen={openIndex === index} onToggle={() => handleToggle(index)} 
                                    icon={<Image src={dot_ico} width={20} height={20} alt="dots" />} >
                                        <ul className={style.dropdownContent}>
                                            <li><a href="#">Edit</a></li>
                                            {user.role !== "Admin" && 
                                                <li><a href="#">Delete</a></li>  
                                            }
                                            {user.role !== "Admin" && 
                                                <li><a href="#">Ban</a></li>  
                                            }
                                        </ul>
                                    </Dropdown>
                            </div>
                        </li>
                    ))}
                </ul>
           </AdminContainer>
        </>
    )
}