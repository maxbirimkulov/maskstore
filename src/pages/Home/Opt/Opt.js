import React from 'react';
import MaskImg from './OptImg.png';
import './opt.css';
import '../../../style.css'

const Opt = () => {
    return (
        <section className='opt'>
            <div className="container">
                <div className="opt__row">
                    <div className='opt__info'>
                        <p className='opt__title'>Крупный и мелкий опт</p>
                        <p className='opt__subtitle'>Гарантия лучшей цены</p>
                        <p className='opt__span'>Ознакомьтесь с Коммерческим предложением 3МАСКИ. Являемся прямым импортером. Предоставим лучшие цены по любому объему,
                            а так же работаем с НДС и без НДС. Для согласования скидок обратитесь к нашим менеджерам</p>
                        <button className='opt__btn' type='button'>Заказать</button>
                    </div>
                    <div className='opt__right'>
                        <img src={MaskImg} alt="Mask image"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Opt;