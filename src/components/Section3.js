import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";

const hotelDetails = [
    {title: 'паста бар'},
    {title: 'арома-сад'},
    {title: 'пляж'},
    {title: 'территория отеля'},
    {title: 'территория отеля'},
    {title: 'территория отеля'},
]

const Section3 = () => {
    return (
        <section className='hotel-details__section'>
            <div className='container'>
                <div className='hotel-details__body'>
                    <h1 className='hotel-details__title title'>вам понравится у нас</h1>
                    <div className='hotel-details__content'>
                        <div className='hotel-details'>
                            <Swiper
                                direction='vertical'
                                slidesPerView={4}
                                className='details_swiper'
                                spaceBetween={50}
                                modules={[Navigation]}
                                navigation={{
                                    prevEl: '.swiper-button-next-details',
                                    nextEl: '.swiper-button-prev-details',
                                }}
                            >
                                {
                                    hotelDetails.map((detail, ind) => (
                                        <SwiperSlide key={ind} className='details-swiper__slide'>
                                            <div className='hotel-detail'>
                                            <span className='hotel-detail__info'>
                                                0{ind + 1}
                                                <p className='hotel-detail__title'>{detail.title}</p>
                                            </span>
                                                <button className='hotel-detail__btn'><span className='hotel-detail__btn-text'>Подробнее</span> <span className='hotel-detail__hidden-btn'>&rarr;</span> </button>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <div className='detail-swiper__controls'>
                                <button className='swiper-button-next-details'></button>
                                <button className='swiper-button-prev-details'></button>
                            </div>
                        </div>
                        <div className='hotel_details__img'>
                            <img src="./assets/images/detailsBeach.png" alt="beach picture"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Section3