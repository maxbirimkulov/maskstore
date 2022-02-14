import React from 'react';
import './OptsForm.css'
import icon from './icons/icon-list.png'
import mail from '../../../assets/icons/footer/mail.svg'
import call from '../../../assets/icons/footer/call.svg'
import mask from '../OptsForm/icons/mask.png'

const OptsForm = () => {
    return (
        <div className='form'>
            <h1 className='form__title'>Заполните форму</h1>
            <p className='form__subtitle'>Для оптового и мелкооптового заказа или оформите заказ через корзину. <br/>
                Возможны поставки как поштучно, так и партиями с индивидуальными <br/>
                скидками от объёма.</p>
            <form className='form__form'>
                <div className='form__form-block'>
                    <label className='form__form-label1'>
                <input className='form__form-label-input' placeholder={`Электронная почта`} required  type="login"/>
                    </label>
                    <label className='form__form-label2'>
                        <input className='form__form-label-input' placeholder={`Ваш телефон`} required  type="text"/>
                    </label>
                </div>
                <label className='form__form-label-comment'>
                    <textarea placeholder='Введите ваш комментарий' className='form__textArea' name="text" cols="20" rows="10" required form></textarea>
                </label>
                <button className='form__btn' type='submit'>Отправить</button>
                <img className='mask' src={mask} alt="mask"/>
            </form>
        </div>
    );
};

export default OptsForm;