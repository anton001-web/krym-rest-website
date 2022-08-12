import React, {forwardRef, useState} from 'react'
import DatePicker from 'react-datepicker'

const CustomDatePicker = forwardRef(({ value, onClick, startD, endD}, ref) => (
    <div className="custom-date-picker" onClick={onClick} ref={ref}>
        <img src="./assets/images/dateIco.png" alt=""/> {!startD && (<span className='date-enter'>Дата Заезда</span>)} {value} {!endD && (<span className='date-exit'>Дата Выезда</span>)} <span className='open-btn'><img src="./assets/images/arrowDownIco.png" alt=""/></span>
    </div>
));

export const DatePickerD = ({startDate, endDate, setDateRange, increment, decrement, peopleAmount}) => {
    return (
        <>
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
        </>
    )
}