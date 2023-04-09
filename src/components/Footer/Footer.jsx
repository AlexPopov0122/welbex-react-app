import React from "react";
import s from "./Footer.module.css"
import SocialNetworks from "../SocialNetworks/SocialNetworks";

const Footer = () => {

    const menu =
        ["Расчёт стоимости", "Услуги", "Виджеты", "Интеграции", "Наши клиенты",
        "Кейсы", "Благодарственные письма", "Сертификаты", "Блог на Youtube", "Вопрос / Ответ"];

    return (
        <footer>
            <div className={s.aboutCompany}>
                <div className={s.title}>О компании</div>
                <a href="#">Партнёрская программа</a>
                <a href="#">Вакансии</a>
            </div>
            <div className={s.menu}>
                <div className={s.title}>Меню</div>
                <div className={s.menuSubtitles}>
                    {
                        menu.map((el, i) => {
                            return <a href="#" key={i}>{el}</a>
                        })
                    }
                </div>
            </div>
            <div className={s.contacts}>
                <div className={s.title}>Контакты</div>
                <div className={s.contactsSubtitles}>
                    <div className="tel">+7 555 555-55-55</div>
                    <div className={s.socialNetworks}>
                        <SocialNetworks/>
                    </div>
                    <div>Москва, Путевой проезд 3с1, к 902</div>
                </div>
            </div>
            <div className={s.signature}>
                <div className={s.copyWrite}>©WELBEX 2022. Все права защищены.</div>
                <a href="#" className={s.rule}>Политика конфиденциальности</a>
            </div>

        </footer>
    );
};

export default Footer;