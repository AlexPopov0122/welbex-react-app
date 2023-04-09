import React from 'react';
import s from "../Main.module.css";

const Advertising = () => {
    return (
        <div className={s.advertising}>
            <div className={s.title}>Зарабатывайте больше</div>
            <div className={s.gradientTitle + " " + "gradientColor"}>с WELBEX</div>
            <div className={s.subtitle}>Развиваем и контролируем продажи за вас</div>
        </div>
    );
};

export default Advertising;