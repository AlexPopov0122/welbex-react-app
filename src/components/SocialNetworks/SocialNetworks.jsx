import React from 'react';
import s from "../Header/Header.module.css";
import telegram from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import whatsapp from "../../images/whatsapp.svg";

const SocialNetworks = () => {
    return (
        <>
            <a href="#"><img src={telegram} alt="telegram"/></a>
            <a href="#"><img src={viber} alt="viber"/></a>
            <a href="#"> <img src={whatsapp} alt="whatsapp"/></a>
        </>
    );
};

export default SocialNetworks;