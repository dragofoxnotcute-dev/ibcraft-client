import style from './titleblock.module.css'
import moderator_skin from "@static/ib_craft_moderader.svg"
import ilyaskin from "@static/ib_craft_owner.svg"
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

function TitleBlock () {

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };

    }, []);

    return (
        <div className={style.main_title}>
            <section ref={sectionRef} className={style.character_container}>
                <div className={`${style.character} ${isVisible ? style.visible : style.hidden}  ${style.creator} `}>
                            <Image src={ilyaskin} alt="andery"/>
                </div>
                <div className={`${style.character}  ${isVisible ? style.visible : style.hidden}  ${style.moderator}`}>
                        <Image src={moderator_skin} alt="ilyabot"/>
                </div>
            </section>
            <div className={style.text_container}>
                <div className={style.block_context_title}>
                    <p className={style.text}>
                        Вы устали от игры на серверах с модами или от игры на серверах,
                        созданных только для доната? Хочется спокойно поиграть в ванильный
                        Minecraft без лишней суеты с небольшим количеством РП в мультиплеере?
                        Тогда мы рады вам представить наш сервер на версии 1.20.1 - IB-Craft!
                    </p>
                </div>
            </div>
        </div>
    ) 
}

export default TitleBlock;