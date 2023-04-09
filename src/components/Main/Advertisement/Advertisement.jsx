import React from 'react';
import s from "../Main.module.css";

const Advertisement = () => {
    return (
        <div className={s.advertisement}>
            <div className={s.title}>
                Вместе
                <span className={s.gradientTitle + " " + "gradientColor"}> С БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ </span>
                мы дарим:
            </div>
            <div className={s.absBody}>
                <div className={s.absBlock}>
                    <div className={s.title}>
                        ВИДЖЕТЫ
                    </div>
                    <div className={s.subtitle}>
                        30 готовый решений
                    </div>
                </div>
                <div className={s.absBlock}>
                    <div className={s.title}>
                        DASHBOARD
                    </div>
                    <div className={s.subtitle}>
                        с показателями
                        вашего бизнеса
                    </div>
                </div>
                <div className={s.absBlock}>
                    <div className={s.title}>
                        SKYPE АУДИТ
                    </div>
                    <div className={s.subtitle}>
                        отдела продаж и CRM системы
                    </div>
                </div>
                <div className={s.absBlock}>
                    <div className={s.title}>
                        35 ДНЕЙ
                    </div>
                    <div className={s.subtitle}>
                        использования CRM
                    </div>
                </div>
            </div>

            <div className={s.absBodyMobile}>
                <div>
                    <span className="gradientColor">&#8210; </span>
                    <span>Skype аудит</span>
                </div>
                <div>
                    <span className="gradientColor">&#8210; </span>
                    <span>30 виджетов</span>
                </div>
                <div>
                    <span className="gradientColor">&#8210; </span>
                    <span>Dashboard</span>
                </div>
                <div>
                    <span className="gradientColor">&#8210; </span>
                    <span>Месяц аmoCRM</span>
                </div>
            </div>

            <button>Получить консультацию</button>
        </div>
    );
};

export default Advertisement;