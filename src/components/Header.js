import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {toggleBurger} from "../store/actions";
import {Link} from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch()
    const burgerMenu = React.createRef()

    const handleBurger = () => {
        dispatch(toggleBurger())
    }

    const {visible} = useSelector(state => {
        const {burger} = state
        return burger
    })

    useEffect(() => {
        if(visible) {
            document.documentElement.classList.add('scroll-active')
            burgerMenu.current.classList.add('burger-active')
        } else {
            document.documentElement.classList.remove('scroll-active')
            burgerMenu.current.classList.remove('burger-active')
        }
    }, [visible])

    const menuDisable = () => {

    }

    return (
        <header className='header'>
            <div className='container'>
                <div className='header-content'>
                    <div className='header-leftSide-info'>
                        <button className='burger-open' onClick={handleBurger}>
                            <span className='burger-open__bar'></span>
                            <span className='burger-open__bar'></span>
                            <span className='burger-open__bar'></span>
                        </button>
                        <Link to='/' onClick={() => handleBurger()}><img src="./assets/images/logo.png" className='header-logo' alt='logo'/></Link>
                    </div>
                    <div className='circleLogo-block'>
                        <img src="../assets/images/circleLogo.png" alt="logo" className='circleLogo'/>
                    </div>
                    <button className='header-btn'>
                        <span className='order-text'>забронировать</span> <span className='arrow'>&rarr;</span>
                    </button>
                </div>
            </div>
            <div className='hidden-burgerBlock' ref={burgerMenu}>
                <div className='container'>
                    <div className='burger-content'>
                        <button className='burger-close__btn' onClick={() => handleBurger()}>&times;</button>
                        <Link to='/'><img src="./assets/images/logo.png" className='hidden_header-logo' alt='logo'/></Link>
                        <div className='burger-content-grid'>
                            <div className='lists-block'>
                                <ul className='first-burgerList'>
                                    <li className='burger-list-item'><Link onClick={() => handleBurger()} to="/rooms" className='burger-link'>номера и цены</Link>
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
                                        <li className='burger-list-item'><a href="" className='burger-link'>активынй
                                            отдых</a></li>
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
        </header>
    )
}

export default Header