"use client";
import { useEffect } from "react";
import style from "./Modal.module.css"

interface ModalProps{
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children}: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.documentElement.classList.add("modal_open"); 
        } else {
            document.documentElement.classList.remove("modal_open"); 
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape)
        } else {
            document.removeEventListener("keydown", handleEscape)
        }

        return () => document.removeEventListener("keydown", handleEscape)

    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={style.modal_overlay} onClick={onClose}>
            <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
                {children}
                <button className={style.close_button} onClick={onClose}>Закрыть</button>
            </div>
        </div>
    )
}