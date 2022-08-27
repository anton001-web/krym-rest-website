import React from 'react'

export const Form = () => {
    return (
        <div className='offer-form__block'>
            <form className='offer-form'>
                <input type="text" className='offer-input offer-name__input' placeholder='Ваше имя'/>
                <input type="text" className='offer-input offer-phone__input' placeholder='Ваш телефон'/>
                <button className='offer-submit__btn'>принять участие</button>
            </form>
        </div>
    )
}
