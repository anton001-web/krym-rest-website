import React from 'react'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className='footer-wrap'>
            <div className="container">
                <footer className='footer-block'>
                    <div className='footer'>
                        <div className='footer-body'>
                            <div className='footer-top'>
                                <img src="./assets/images/logo.png" alt="" className='footer-logo'/>
                                <div className='footer-company__info-block'>
                                    <span className='footer-company__phone'><img src="./assets/images/phoneIco.png"
                                                                                 alt=""/> 8(912) 038-80-44 </span>
                                    <span className='footer-company__info'>
                                298690б россия, крым, г.ялта, пгт форос, форосский спуск, 1
                            </span>
                                </div>
                                <ul className='footer-first__list'>
                                    <li className='footer-first__list-item'><Link to="/rooms" className='footer-link'>номера
                                        и цены</Link>
                                    </li>
                                    <li className='footer-first__list-item'><a href="" className='footer-link'>об
                                        отеле</a></li>
                                    <li className='footer-first__list-item'><a href="" className='footer-link'>фото
                                        отеля</a></li>
                                    <li className='footer-first__list-item'><a href="" className='footer-link'>как
                                        добраться</a>
                                    </li>
                                    <li data-nm className='footer-first__list-item'><a href="" className='footer-link'>отзывы
                                        гостей</a>
                                    </li>
                                </ul>
                                <ul className='footer-second__list'>
                                    <li className='footer-second__list-item'><Link to="/rooms"
                                                                                   className='footer-link'>достопримечательности</Link>
                                    </li>
                                    <li className='footer-second__list-item'><a href=""
                                                                                className='footer-link'>паста-бар</a>
                                    </li>
                                    <li className='footer-second__list-item'><Link to="/rest" className='footer-link'>активный
                                        отдых</Link></li>
                                    <li className='footer-second__list-item'><a href=""
                                                                                className='footer-link'>экстрим</a>
                                    </li>
                                    <li data-nm className='footer-second__list-item'><a href="" className='footer-link'>морские
                                        прогулки</a></li>
                                    <li data-nm className='footer-second__list-item'><a href=""
                                                                                        className='footer-link'>рыбалка</a>
                                    </li>
                                    <li data-nm className='footer-second__list-item'><a href=""
                                                                                        className='footer-link'>спецпредложения</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer-bottom'>
                                <span className='footer-c'>© 2022 Cанторини. Все права защищены.</span>
                                <div className='footer-icons__list'>
                                    <img src="./assets/images/vk.png" alt="ico"/>
                                    <img src="./assets/images/youtube.png" alt="ico"/>
                                    <img src="./assets/images/zen.png" alt="ico"/>
                                </div>
                                <span className='footer-c'>Политика конфиденциальности</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer