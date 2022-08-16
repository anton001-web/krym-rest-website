import React, {forwardRef} from 'react'
import {Link} from "react-router-dom";

const BurgerMenu = forwardRef((props, ref) => {
    return (
        <div className='hidden-burgerBlock' ref={ref}>
            <div className='container'>
                <div className='burger-content'>
                    <button className='burger-close__btn' onClick={() => props.handleBurger()}>&times;</button>
                    <Link to='/' onClick={() => props.handleBurger()}><img src="./assets/images/logo.png" className='hidden_header-logo' alt='logo'/></Link>
                    <div className='burger-content-grid'>
                        <div className='lists-block'>
                            <ul className='first-burgerList'>
                                <li className='burger-list-item'><Link onClick={() => props.handleBurger()} to="/rooms" className='burger-link'>номера и цены</Link>
                                </li>
                                <li className='burger-list-item'><a href="" className='burger-link'>об отеле</a></li>
                                <li className='burger-list-item'><a href="" className='burger-link'>фото отеля</a></li>
                                <li className='burger-list-item'><a href="" className='burger-link'>как добраться</a>
                                </li>
                                <li data-nm className='burger-list-item'><a href="" className='burger-link'>отзывы
                                    гостей</a>
                                </li>
                            </ul>
                            <ul className='second-burgerList'>
                                <div>
                                    <li className='burger-list-item'><a href=""
                                                                        className='burger-link'>достопримечательности</a>
                                    </li>
                                    <li className='burger-list-item'><a href="" className='burger-link'>паста-бар</a>
                                    </li>
                                    <li className='burger-list-item'><Link to="/rest" className='burger-link' onClick={() => props.handleBurger()}>активный
                                        отдых</Link></li>
                                    <li className='burger-list-item'><a href=""
                                                                        className='burger-link'>спецпредложения</a></li>
                                </div>
                                <button className='burger-order-btn'>забронировать</button>
                            </ul>
                        </div>
                        <div className='burger-down__contacts'>
                            <div className='phone-block'>
                                <a href='' className='burger-phone'>
                                    <img src="./assets/images/phoneIco.png" alt=""/> 8(912) 038-80-44
                                </a>
                            </div>
                            <div className='burger-company__infoBlock'>
                                    <span className='burger-company__info'>
                                        298690б россия, крым, г.ялта, пгт форос, форосский спуск, 1
                                    </span>
                            </div>
                            <div className='burger-media'>
                                <div className='burger-media__list'>
                                    <img src="./assets/images/vk.png" alt="vk"/>
                                    <img src="./assets/images/youtube.png" alt="vk"/>
                                    <img src="./assets/images/zen.png" alt="vk"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default BurgerMenu