import React from 'react'
import {useParams} from "react-router";
import {newsData} from "../../data/newsData";
import {Link} from "react-router-dom";

const NewsPageMain = () => {
    const params = useParams()

    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <section className='news-section'>
            <div className='container'>
                <div className='news-section__body'>
                    <h1 className='news-section__title title'>новости</h1>
                    <div className='news-list'>
                        {
                            newsData.map((news, index) => (
                                <div key={index} className='news-list__item'>
                                    <div className='news-list__item-img__block'>
                                        <img src={news.img} alt=""/>
                                    </div>
                                    <div className='news-list__item-text__block' data-pos={news.pos}>
                                        <h3 className='news-list__item-title'>{news.title}</h3>
                                        <span className='news-list__item-text'>{news.text}</span>
                                        <Link onClick={scrollTop} to={news.to} className='news-list__link'>Подробнее</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsPageMain