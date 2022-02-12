import React from 'react';
import './Catalog.css'
import Mask from './imges/Mask.png'
import Starts from './imges/stars.svg'
import Shop from './imges/shop.svg'

const Catalog = () => {
    return (
        <div className="Catalog">
         <div className="container">
                 <div className="Catalog__card">
                     <h3 className="Catalog__title">Каталог в наличии</h3>
                     <button className="Catalog__oll">Все товары</button>
                     <button className="Catalog__brend">Бренды</button>
                 </div>
                 <div className="Catalog__options">
                     <button className="Catalog__btn">FFP1</button>
                     <button className="Catalog__btn">FFP2</button>
                     <button className="Catalog__btn">FFP3</button>
                     <button className="Catalog__btn">3M</button>
                     <button className="Catalog__btn">Алина</button>
                     <button className="Catalog__btn">Spirotek</button>
                     <button className="Catalog__btn">KN95</button>
                 </div>
             <div className="Catalog__row">
                 <div className="Catalog__mask">
                     <div className="Catalog__mask-card">
                         <img className="Catalog__maks-img" src={Mask} alt=""/>
                         <div className="Catalog__maks-span">Новинка</div>
                     </div>
                     <div className="Catalog__size">
                         <h4 className="Catalog__size-title">Респиратор (маска) KN95 FFP2 <br/>
                             без клапана</h4>
                         <img src={Starts} alt=""/>
                         <div className="Catalog__prise">
                             <h4 className="Catalog__prise-blue">180 ₽</h4>
                             <span className="Catalog__prise-silver">200 ₽</span>
                             <p className="Catalog__prise-red">-10%</p>
                         </div>
                         <div className="Catalog__choice">
                             <button className="Catalog__choice-btn">1 шт. </button>
                             <button className="Catalog__choice-btn">5 шт. </button>
                             <button className="Catalog__choice-btn">10 шт. </button>
                             <button className="Catalog__choice-btn">ОПТ</button>
                         </div>
                         <div className="Catalog__shop">
                                <div className="Catalog__shop-btn">
                                    <p className="Catalog__shop-basket">В корзину</p>
                                    <img src={Shop} alt=""/>
                                </div>
                             <button className="Catalog__shop-btns">
                                 Купить в 1 клик
                             </button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        </div>
    );
};

export default Catalog;