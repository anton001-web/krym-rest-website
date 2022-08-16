import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {toggleBurger} from "../store/actions";
import {Link} from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

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
                        <Link to='/'><img src="./assets/images/logo.png" className='header-logo' alt='logo'/></Link>
                    </div>
                    <div className='circleLogo-block'>
                        <img src="../assets/images/circleLogo.png" alt="logo" className='circleLogo'/>
                    </div>
                    <button className='header-btn'>
                        <span className='order-text'>забронировать</span> <span className='arrow'>&rarr;</span>
                    </button>
                </div>
            </div>
            <BurgerMenu ref={burgerMenu} handleBurger={handleBurger}/>
        </header>
    )
}

export default Header