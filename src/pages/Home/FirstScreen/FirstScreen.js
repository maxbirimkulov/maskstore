import React from 'react';
import ArrowRight from '../../../assets/icons/home/arrowright.svg';
import Coin from '../../../assets/icons/home/coin.svg';
import Truck from '../../../assets/icons/home/deliverytruck.svg';
import FaceMask from '../../../assets/icons/home/facemask.svg';
import HomeImg from '../../../assets/icons/home/imghome.png';
import Play from '../../../assets/icons/home/play.svg';
import Protect from '../../../assets/icons/home/protect.svg';
import './firstScreen.css';

const FirstScreen = () => {
    return (
        <section className="first-screen">
            <div className="container">
                <div className="first-screen__row">
                    <div className="first-screen__left">
                        <h1 className="first-screen__title">Сертифицированные <br/> маски-респираторы</h1>
                        <p className="first-screen__subtitle">В наличии с доставкой за 2 часа и оплатой <br/> по факту
                            получения</p>
                        <div className="first-screen__left_row">
                            <div className="first-screen__left_card">
                                <div className="first-screen__left_card-left">
                                    <img src={Truck} alt="Truck"/>
                                </div>
                                <div className="first-screen__left_card-right">
                                    <p className="first-screen__left_card-title">Самовывоз и отгрузки</p>
                                    <p className="first-screen__left_card-subtitle">Обладая фирменным магазином,
                                        предоставляем возможность осуществить самовывоз.</p>
                                </div>
                            </div>
                            <div className="first-screen__left_card">
                                <div className="first-screen__left_card-left">
                                    <img src={Coin} alt="Coin"/>
                                </div>
                                <div className="first-screen__left_card-right">
                                    <p className="first-screen__left_card-title">Лучшие цены, оптовые продажи</p>
                                    <p className="first-screen__left_card-subtitle">Являемся прямым импортером
                                        и производителем.</p>
                                </div>
                            </div>
                            <div className="first-screen__left_card">
                                <div className="first-screen__left_card-left">
                                    <img src={FaceMask} alt="FaceMask"/>
                                </div>
                                <div className="first-screen__left_card-right">
                                    <p className="first-screen__left_card-title">Оригинальная продукция</p>
                                    <p className="first-screen__left_card-subtitle">Каждый респиратор имеет сертификат
                                        соответствия, что доказывает оригинальность продукции.</p>
                                </div>
                            </div>
                            <div className="first-screen__left_card">
                                <div className="first-screen__left_card-left">
                                    <img src={Protect} alt="Protect"/>
                                </div>
                                <div className="first-screen__left_card-right">
                                    <p className="first-screen__left_card-title">Защита до 99%</p>
                                    <p className="first-screen__left_card-subtitle">Респираторы применяются как при защите
                                        от COVID-19, так и в производственных и строительных целях.</p>
                                </div>
                            </div>
                        </div>
                        <div className="first-screen__link">
                            <a href="#">
                                Ознакомьтесь с нашим коммерческим предложением 3Маски КП <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64645L20.1716 0.464466C19.9763 0.269204 19.6597 0.269204 19.4645 0.464466C19.2692 0.659728 19.2692 0.976311 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.7308 19.9763 7.7308 20.1716 7.53553L23.3536 4.35355ZM0 4.5H23V3.5H0V4.5Z"
                                      fill="#3C39D0"/>
                            </svg>
                            </a>
                        </div>
                        <div className="first-screen__btns">
                            <button className="first-screen__btn_catalog" type="button">Перейти в каталог</button>
                            <div className="first-screen__btn_video">
                                <div className="first-screen__btn_video-img">
                                    <img src={Play} alt="Play"/>
                                </div>
                                <p>Смотреть видео-презентацию</p>
                            </div>
                        </div>
                    </div>
                    <div className="first-screen__left_right">
                        <img src={HomeImg} alt="HomeImg"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstScreen;