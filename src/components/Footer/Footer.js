import React from 'react';
import './footer.css'
import call from '../../assets/icons/footer/call.svg'
import mail from '../../assets/icons/footer/mail.svg'
import marker from '../../assets/icons/footer/marker.svg'
import user from '../../assets/icons/footer/user.svg'
import retailer from '../../assets/icons/footer/retailer.png'



const Footer = () => {
    return (
        <div className='footer container'>
                <div className='footer__block-1'>
                    <h1 className='footer__title'>КОНТАКТЫ</h1>
                    <div className='footer-box'>
                        <h2 className='footer__box-title'><span className='footer__box-title'><img className='footer__box-title-svg'  src={marker} alt="call"/></span>Наш адрес</h2>
                        <p className='footer__box-subtitle'>Московская обл., Мытищи, Шараповский пр-д, 7 <br/> Санкт-Петербург, ул.Федора Абрамова, д.18</p>
                    </div>
                    <div className='footer__box'>
                        <h2 className='footer__box-title'><span><img className='footer__box-title-svg' src={call} alt="call"/></span>Наш телефон</h2>
                        <a className='footer__box-link' href="tel: 8 (499) 322-76-55">8 (499) 322-76-55</a>
                    </div>
                    <div className='footer__box'>
                        <h2 className='footer__box-title'><span><img className='footer__box-title-svg' src={mail} alt="mail"/></span>Наша почта</h2>
                        <a className='footer__box-link' href="#">info@3maski.ru</a>
                    </div>
                </div>
                <div className='footer__block-2'>
                    <h2 className='footer__title'>О МАГАЗИНЕ</h2>
                    <p className='footer__subtitle'>Специализированный магазин сертифицированных, оригинальных защитных материалов <br/> для органов дыхания и защиты от вируса COVID-19</p>
                    <div className="footer__box">
                        <h3 className='footer__box-title'> <span><img src={user} alt="user"/></span>ИП Корнев Иван Сергеевич</h3>
                        <div className="footer__box-adress">
                            <span className='footer__box-adress-span'>
                                Адрес офиса:
                            </span>
                            Московская область город Мытищи Шараповский проезд Строение 7 <br/>
                            ИНН  <br/>
                            503809142008, <br/>
                            ОГРН <br/>
                            320508100210632, <br/>
                            Расчетный счет <br/>
                            40802810500001545520, <br/>
                            Банк <br/>
                            АО "ТИНЬКОФФ БАНК", <br/>
                            ИНН банка <br/>
                            7710140679, <br/>
                            БИК банка <br/>
                            044525974
                        </div>
                    </div>
                </div>
                <div className='footer__block-3'>
                    <img className='retailer__photo' src={retailer} alt="ret"/>
                </div>
        </div>
    );
};

export default Footer;