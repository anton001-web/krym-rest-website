import React, {forwardRef, useEffect, useState} from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {DatePickerD} from './DatePicker'

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
            </div>
        </section>
    )
}

export default Section1