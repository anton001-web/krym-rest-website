import React from 'react'
import {rooms} from "../../data/roomsData";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

const std = rooms.filter(room => room.type === 'standart')

const StdRoomPage = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    }

    return (
        <section className='room-d__page'>
            <div className='container'>
                <div className="room-d__body">
                    <div className='room-d__header'>
                        <img src={std[0].fullImg} alt=""/>
                        <div className='room-d__title-block'>
                            <h1 className='room-d__title title'>Стандартная комната</h1>
                        </div>
                    </div>
                    <div className='room-d__desc-list'>
                        {
                            std[0].roomDesc.map((descInf, index) => (
                                <div className='room-d__desc-item' key={index}>
                                    <div className='room-d-i__title-block'>
                                        <span className='room-d__desc-title'>{descInf.title}</span>
                                    </div>
                                    <div className='room-d__desc-block'>
                                        <p className='room-desc'>{descInf.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='room-d__gallery-block'>
                        <h1 className='room-d__gallery-title title'>галерея</h1>
                        <div className='room-d__gallery'>
                            <Swiper
                                className='room-gallery__swiper'
                                slidesPerView={1}
                                breakpoints={{
                                    767: {
                                        slidesPerView: 3
                                    }
                                }}
                                pagination={pagination}
                                modules={[Pagination]}
                            >
                                <SwiperSlide>
                                    <div className='room-d__gallery-item'>
                                        <img src={std[0].galleryImgTwo} alt=""/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='room-d__gallery-item' data-top='true'>
                                        <img src={std[0].galleryImgOne} alt=""/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='room-d__gallery-item'>
                                        <img src={std[0].galleryImgTwo} alt=""/>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StdRoomPage