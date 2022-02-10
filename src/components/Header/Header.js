import React from 'react';
import "./headerStyles.css";
import location from "./assets/location.svg";
import time from "./assets/clock.svg";
import email from "./assets/email.svg";
import cart from "./assets/shoppingcart.svg";
import call from "./assets/call.svg";
import logo from "./assets/logo.svg";
import burger from "./assets/burger.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="header__up">
                <div className="container">
                    <nav className="header__up-nav">
                        <div className="header__up-left">
                            <img className="header__up-left_location" src={location} alt="location icon"/>
                            <h4 className="header__up-left_title">Москва</h4>
                        </div>
                        <div className="header__up-right">
                            <div className="header__up-time">
                                <img src={time} alt="time"/>
                                <h4 className="header__up-right_title">
                                    Пн-Вс с 10.00 до 20.00
                                </h4>
                            </div>
                            <div className="header__up-email">
                                <img src={email} alt="email"/>
                                <h4 className="header__up-right_title">
                                    mask@mail.com
                                </h4>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
            <div className="header__down">
                <div className="container">
                    <div className="header__down-nav">
                        <div className="header__down-left">
                            <img src={logo} alt="logotype"/>
                            <div className="header__down-left_button">
                                <h2 className="header__down-left-title">
                                    КАТАЛОГ
                                </h2>
                                <img src={burger} alt="burger btn"/>
                            </div>
                        </div>
                        <ul className="header__down-mid">
                            <li className="header__down-link">Главная</li>
                            <li className="header__down-link">Доставка</li>
                            <li className="header__down-link">ОПТ</li>
                            <li className="header__down-link">Контакты</li>
                            <li className="header__down-link">Что защищает?</li>
                        </ul>
                        <div className="header__down-right">
                            <div className="header__down-right_cart">
                                <img src={cart} alt="shopping cart icon"/>
                                <div className="header__down-right_cart-all">
                                    <span className="header__down-right_cart-num">0</span>
                                    <span className="header__down-right_cart-price">0₽</span>
                                </div>
                            </div>
                            <div className="header__down-right_contacts">
                                <div className="header__down-right_number">
                                    <img src={call} alt="call icon"/>
                                    <span>+7 929 622 88 80</span>
                                </div>
                                <span className="header__down-right_contacts-order">Заказать звонок</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;