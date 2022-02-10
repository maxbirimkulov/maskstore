import React from 'react';
import Play from './../../../assets/icons/main/play.svg'
import Pull from './../../../assets/icons/main/pull.svg'
import './Info.css'

const Info = () => {
    return (
        <section className='info'>
            <div className='container'>
                <div className='info__container'>
                    <div className='info__left'>
                        <div className='info__cards'>
                            <div className='info__cards-first'>
                                <img src={Play} alt="play"/>
                                <p className='info__cards-title'>Защита от пыли и микробов</p>
                            </div>
                            <p className='info__cards-subtitle'>Складная 3-х панельная конструкция обеспечивает надежное прилегание респиратора 3М для различных типов и форм лица, маска приспосабливается к движениям лица и устойчива к смятию.</p>
                        </div>
                        <div className='info__cards'>
                            <div className='info__cards-first'>
                                <img src={Play} alt="play"/>
                                <p className='info__cards-title'>Производство Великобритания (UK)</p>
                            </div>
                            <p className='info__cards-subtitle'>Продукция высочайшего качества от известного во всём мире бренда.</p>
                        </div>
                        <div className='info__cards'>
                            <div className='info__cards-first'>
                                <img src={Play} alt="play"/>
                                <p className='info__cards-title'>FFP2 и FFP3</p>
                            </div>
                            <p className='info__cards-subtitle'>Наши респираторы обладают клапанами с наивысшими уровнями защиты. Очистка вдыхаемого воздуха до 99%.</p>
                        </div>
                    </div>
                    <div className='info__right'>
                        <div className='info__right-imgFirst'>
                            <div className='info__right-playBlock'>
                                <img src={Pull} alt="pull"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='info__container'>
                    <div className='info__right'>
                        <div className='info__right-imgSecond'>
                            <div className='info__right-playBlock'>
                                <img src={Pull} alt="pull"/>
                            </div>
                        </div>
                    </div>
                    <div className='info__left'>
                        <div className='info__cards'>
                            <div className='info__cards-first'>
                                <img src={Play} alt="play"/>
                                <p className='info__cards-title'>Работа по договору</p>
                            </div>
                            <p className='info__cards-subtitle'>Заключаем договор поставки продукции в нуждающиеся учреждения.</p>
                        </div>
                        <div className='info__cards'>
                            <div className='info__cards-first'>
                                <img src={Play} alt="play"/>
                                <p className='info__cards-title'>Всегда в наличии</p>
                            </div>
                            <p className='info__cards-subtitle'>Собственный склад гарантирует наличие продукции и самовывоз для наших клиентов.</p>
                        </div>
                        <div className='info__cards'>
                            <div className='info__cards-first'>
                                <img src={Play} alt="play"/>
                                <p className='info__cards-title'>Организуем поставку</p>
                            </div>
                            <p className='info__cards-subtitle'>Вы можете оставить предварительный заказ на нужное наименование продукции и его количество, а мы организуем поставку.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;