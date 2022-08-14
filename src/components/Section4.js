import React, {useState} from 'react'

import {restData} from "../data/restData";


const Section4 = () => {
    const [currentType, setCurrentType] = useState('voyage')

    const changeVacation = (event) => {
        setCurrentType(event.target.dataset.type)
    }

    return (
        <section className='vacation-section section'>
            <div className='container'>
                <div className='vacation-section__body'>
                    <div className='vacation-header'>
                        <h1 className='vacation-section__title title'>активный отдых в отеле санторини</h1>
                        <div className='vacations-switches'>
                            <button className='vacation-switch' data-type='voyage' data-active={currentType === 'voyage' ? 'true' : 'false'} onClick={(e) => changeVacation(e)}>морские прогулки</button>
                            <button className='vacation-switch' data-type='fishing' data-active={currentType === 'fishing' ? 'true' : 'false'} onClick={(e) => changeVacation(e)}>рыбалка</button>
                            <button className='vacation-switch' data-type='extreme' data-active={currentType === 'extreme' ? 'true' : 'false'} onClick={(e) => changeVacation(e)}>экстрим</button>
                        </div>
                    </div>
                    <div className='vacation-list'>
                        {
                            restData.map((vacation, ind) => {
                                if(vacation.type === currentType) {
                                    return (
                                        <div data-pos={vacation.id} className='vacation'>
                                            <img src={vacation.img} alt="img" className='vac-img'/>
                                            <div className='vacation-btn-block'>{vacation.title} <button className='vac-btn-more'>&#10555;</button></div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4