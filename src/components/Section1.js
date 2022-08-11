import React, {forwardRef, useEffect, useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Swiper, SwiperSlide} from "swiper/react";

const CustomDatePicker = forwardRef(({ value, onClick, startD, endD}, ref) => (
    <div className="custom-date-picker" onClick={onClick} ref={ref}>
        <img src="./assets/images/dateIco.png" alt=""/> {!startD && (<span className='date-enter'>Дата Заезда</span>)} {value} {!endD && (<span className='date-exit'>Дата Выезда</span>)} <span className='open-btn'><img src="./assets/images/arrowDownIco.png" alt=""/></span>
    </div>
));

const Section1 = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [peopleAmount, setPeopleAmount] = useState(0)

    const increment = () => {
        setPeopleAmount(peopleAmount + 1)
    }

    const decrement = () => {
        setPeopleAmount(peopleAmount - 1)
    }

    return (
        <section className='room-search__section'>
            <div className='container'>
                <div className='room-search__section-body'>
                    <h1 className='room-search__section-title'>комфортный отдых в крыму</h1>
                    <div className='room-search__date-picker__block'>
                        <DatePicker
                            selectsRange
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            customInput={<CustomDatePicker startD={startDate} endD={endDate}/>}
                        />
                        <div className='people-amount'>
                            <img src="./assets/images/peopleIco.png" alt="people"/>
                            <span>Кол-во людей</span>
                            <div className='people-amount__controls'>
                                <button className='increment people-control' onClick={increment}> + </button>
                                <span className='people_count'>{peopleAmount}</span>
                                <button className='decrement people-control' onClick={decrement}> - </button>
                            </div>
                        </div>
                        <div className='search-btn__block'>
                            <button className='room-search'>
                                <img src="./assets/images/searchIco.png" alt="search"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1