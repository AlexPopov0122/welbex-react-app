import React from "react";
import s from "./Header.module.css";
import logo1 from "../../images/logo1.svg"
import logo2 from "../../images/logo2.svg"
import telegram from "../../images/telegram.svg"
import viber from "../../images/viber.svg"
import whatsapp from "../../images/whatsapp.svg"
import SocialNetworks from "../SocialNetworks/SocialNetworks";

const Header = () => {
    return (
        <header>
            <a href="#" className={s.logo}>
                <div className={s.title}>
                    <img src={logo1} alt="logo1"/>
                    <img src={logo2} alt="logo2"/>
                </div>
                <div className={s.subtitle}>
                    крупный интегратор CRM в Росcии и ещё 8 странах
                </div>
            </a>
            <div className={s.navigate}>
                <a href="#">Услуги</a >
                <a href="#">Виджеты</a >
                <a href="#">Интеграции</a >
                <a href="#">Кейсы</a >
                <a href="#">Сертификаты</a >
            </div>
            <div className={s.tel}>+7 555 555-55-55</div>
            <div className={s.socialNetworks}>
                <SocialNetworks/>
            </div>
        </header>
    );
};

export default Header;