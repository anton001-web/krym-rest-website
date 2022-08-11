import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

import 'swiper/scss';

const rooms = [
    {type: 'lux', area: 40, people: 4, view: 'Море', img: './assets/images/luxRoom.png'},
    {type: 'standart', area: 18, people: 2, view: 'Терасса', img: './assets/images/standartRoom.png'},
    {type: 'deluxe', area: 36, people: 4, view: 'Горы', img: './assets/images/deluxRoom.png'},
]

const Section2 = () => {
    return (
        <section className='rooms-list__section'>
            <div className='container'>
                <div className="rooms-list__section-body">
                    <div className='rooms-list__title-block'>
                        <img src="./assets/images/secTitleL.png" className='rooms-list__imgL-tit'/>
                        <span>
                            <h1 className='title'>Номера</h1>
                            <h2 className='rooms-list__subTitle'>Выберите свой номер</h2>
                        </span>
                        <img className='rooms-list__imgR-tit' src="./assets/images/secTitleR.png" alt=""/>
                    </div>
                    <div className='rooms-list__block'>
                        <Swiper
                            modules={[Navigation]}
                            breakpoints={{
                                767: {
                                    slidesPerView: 3
                                }
                            }}
                            navigation
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
                                                <button className='detail-room__btn rooms-list__btn'>подробнее</button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2