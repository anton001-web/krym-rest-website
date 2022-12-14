import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {rooms} from "../data/roomsData";

import 'swiper/scss';
import {Link} from "react-router-dom";


const Section2 = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <section className='rooms-list__section section'>
            <div className='container'>
                <div className="rooms-list__section-body">
                    <div className='rooms-list__title-block title-block'>
                        <img src="./assets/images/secTitleL.png" className='rooms-list__imgL-tit imgLeft-title'/>
                        <span>
                            <h1 className='title'>Номера</h1>
                            <h2 className='rooms-list__subTitle section-subTitle'>Выберите свой номер</h2>
                        </span>
                        <img className='rooms-list__imgR-tit imgRight-title' src="./assets/images/secTitleR.png" alt=""/>
                    </div>
                    <div className='rooms-list__block'>
                        <Swiper
                            modules={[Navigation]}
                            breakpoints={{
                                767: {
                                    slidesPerView: 3
                                }
                            }}
                            navigation={{
                                prevEl: '.swiper-button-next-rooms',
                                nextEl: '.swiper-button-prev-rooms',
                            }}
                            slidesPerView={1}
                            spaceBetween={30}
                            className='rooms-swiper'
                            loop={true}
                        >
                            {
                                rooms.map((room, ind) => (
                                    <SwiperSlide key={ind} className='sec2-swiper__slide'>
                                        <div className='rooms-list__room'>
                                            <img src={room.img} alt="room-view" className={room.type}/>
                                            <div className='rooms-list__room-info__block'>
                                                <span className='room-type'>{room.type}</span>
                                                <div className='rooms-list__room-info'>
                                                    <span className='room-area'>S-{room.area} кв.м.</span>
                                                    <span className='room-people'> <img src="./assets/images/roomsListPICO.png" alt=""/> {room.people}</span>
                                                    <span className='room-view'>{room.view}</span>
                                                </div>
                                            </div>
                                            <div className='room-btns'>
                                                <button className='book-room__btn rooms-list__btn'>забронировать</button>
                                                <Link onClick={scrollTop} className='detail-room__btn rooms-list__btn' to={room.page}>подробнее</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <button className='swiper-button-next-rooms'></button>
                        <button className='swiper-button-prev-rooms'></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2