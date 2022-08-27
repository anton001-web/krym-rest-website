import React from 'react'
import {restData} from "../../data/restData";
import {Form} from "../Form";
import {useParams} from "react-router";

const RestExPage = () => {
    const params = useParams()
    const restCurrent = restData.filter(data => data.pageType === params.restType)

    return (
       <section className='rest-info__section'>
            <div className='container'>
                <div className='rest-info__body'>
                    <div className='rest-info__header'>
                        <img src={restCurrent[0].imgPageMain} alt=""/>
                    </div>
                    <div className='rest-info__main-text__block'>
                        <h1 className='rest-info__main-title title'>{restCurrent[0].title}</h1>
                        <p className='rest-info__main-text'>
                            {restCurrent[0].pageText}
                        </p>
                    </div>
                    <div className='rest-info__advantages-block'>
                        <h2 className='rest-info__second-title title'>{restCurrent[0].title}</h2>
                        <div className='rest-info__advantages'>
                            <div className='rest-info__advantages-img__block'>
                                <img src={restCurrent[0].imgPageSec} alt=""/>
                            </div>
                            <div className='rest-info__advantages-list__block'>
                                <div className='rest-info__advantages-list'>
                                    {
                                        restCurrent[0].restInfoList.map((restInfo, index) => (
                                            <div key={index} className='advantages-list__item'>
                                                <span className='advantages-list__item-title'>{restInfo.title}</span>
                                                <p className='advantages-list__item-text'>{restInfo.text}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rest-info__form-block'>
                        <h1 className='rest-info__form-block__title title'>проживаете у нас? закажите услугу</h1>
                        <Form />
                    </div>
                </div>
            </div>
       </section>
    )
}

export default RestExPage