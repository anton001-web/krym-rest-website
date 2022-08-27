import React, {useState} from 'react'

import {specOffersData} from "../data/specOffersData";
import {Link} from "react-router-dom";

const Section5 = () => {
    const [visible, setVisible] = useState(false)
    const offerListRef = React.createRef()

    const toggleList = () => {
        if(!visible) {
            setVisible(true)
            offerListRef.current.classList.add('list-active')
        } else {
            setVisible(false)
            offerListRef.current.classList.remove('list-active')
        }
    }

    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <section className='special-offer__section section' id='spec-offer'>
            <div className='container'>
                <div className='special-offer__section-body'>
                    <div className='spec-offer__title-block title-block'>
                        <img src="./assets/images/secTitleL.png" className='spec-offer__imgL-tit imgLeft-title'/>
                        <span>
                            <h1 className='title'>специальные предложения</h1>
                        </span>
                        <img className='spec-offer__imgR-tit imgRight-title' src="./assets/images/secTitleR.png" alt=""/>
                    </div>
                    <div className='spec-offer__list' ref={offerListRef}>
                        {
                            specOffersData.map((offer, ind) => (
                                <div className='offer-block' data-hidden={offer.hidden}>
                                    <div className='offer-img'>
                                        <img src={offer.img} alt="image"/>
                                    </div>
                                    <div className='offer-info'>
                                        <div className='offer-info__header'>
                                            <span className='offer-date'>{new Date().toLocaleDateString()}</span>
                                            <h2 className='offer-title'>{offer.title}</h2>
                                            <p className='offer-text'>{offer.text}</p>
                                        </div>
                                        <Link onClick={scrollTop} to={offer.to} className='offer-btn'>
                                            подробнее
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button className='see-more__btn' onClick={toggleList}>смотреть всё</button>
                </div>
            </div>
        </section>
    )
}

export default Section5