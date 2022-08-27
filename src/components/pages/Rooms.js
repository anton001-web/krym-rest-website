import React, {useState} from 'react'
import {rooms} from "../../data/roomsData";
import {DatePickerD} from "../DatePicker";
import {Link} from "react-router-dom";

const Rooms = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [peopleAmount, setPeopleAmount] = useState(0)

    const increment = () => {
        setPeopleAmount(peopleAmount + 1)
    }

    const decrement = () => {
        setPeopleAmount(peopleAmount - 1)
    }

    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <section className='room-page'>
            <div className="container">
                <div className='room-page__content'>
                    <div className='room-page__search'>
                        <div className='room-page__search-block'>
                            <DatePickerD
                                startDate={startDate}
                                endDate={endDate}
                                setDateRange={setDateRange}
                                increment={increment}
                                decrement={decrement}
                                peopleAmount={peopleAmount}
                            />
                        </div>
                    </div>
                    <div className='room-page__rooms'>
                        <div className='room-page__title-block title-block'>
                            <img src="./assets/images/secTitleL.png" className='room-page__imgL-tit imgLeft-title'/>
                            <span>
                                <h1 className='title'>Номера</h1>
                                <h2 className='room-page__subTitle section-subTitle'>Выберите свой номер</h2>
                            </span>
                            <img className='room-page_imgR-tit imgRight-title' src="./assets/images/secTitleR.png" alt=""/>
                        </div>
                        <div className='room-page__rooms-list__block'>
                            <div className='room-page__rooms-list'>
                                {
                                    rooms.map((room, ind) => (
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
                                            <div className='room-btns room-page_room_btns'>
                                                <button className='room-page_book-room__btn rooms-list__btn'>забронировать</button>
                                                <Link onClick={scrollTop} to={room.page} className='room-page_detail-room__btn rooms-list__btn'>подробнее</Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rooms