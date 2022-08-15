import React from 'react'
import {specOffersData} from "../../data/specOffersData";

const acco = specOffersData.filter(offer => offer.type === 'service')

const ServiceOffPage = () => {
    return (
        <section className='service-offer__page'>
            <div className='container'>
                <div className='service-offer__img-block offer-img__block'>
                    <img src="./assets/images/accoDiscPage.png" alt="img"/>
                </div>
                <div className='service-offer__body offer-page__body'>
                    <div className='offer-info__block'>
                        <div className='offer-info'>
                            <h1 className='offer-title title'>{acco[0].title}</h1>
                            <span className='offer-date-to'>Предложение действительно до 20 июля 2022 г.</span>
                            <p className='offer-text-sec'>{acco[0].offerText}</p>
                            <span className='offer-condition-title'>условия участия</span>
                            <p className='offer-condition-text'>{acco[0].offerCondText}</p>
                        </div>
                    </div>
                    <div className='offer-form__block'>
                        <form className='offer-form'>
                            <input type="text" className='offer-input offer-name__input' placeholder='Ваше имя'/>
                            <input type="text" className='offer-input offer-phone__input' placeholder='Ваш телефон'/>
                            <button className='offer-submit__btn'>принять участие</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceOffPage;