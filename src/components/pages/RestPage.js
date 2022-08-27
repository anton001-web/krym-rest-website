import React from 'react'
import {restData} from "../../data/restData";
import {Link} from "react-router-dom";

const RestPage = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <section className='rest-page'>
            <div className='container'>
                <div className='rest-page__body'>
                    <div className='rest-page__header'>
                        <div className='rest-page__title-block'>
                            <h1 className='rest-page__title title'>активный отдых</h1>
                        </div>
                    </div>
                    <div className='rest-list'>
                        {
                            restData.map((vacation, ind) => (
                                <div data-posp={vacation.idForP} className='vacation'>
                                    <img src={vacation.img} alt="img" className='vac-img'/>
                                    <div className='vacation-btn-block'>{vacation.title} <Link onClick={scrollTop} to={vacation.to} className='vac-btn-more'>&#10555;</Link></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RestPage;