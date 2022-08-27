import React from 'react'
import './styles/main.scss'
import Header from "./components/Header";
import Main from "./components/Main";
import {Route, Routes} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import Rooms from "./components/pages/Rooms";
import RestPage from "./components/pages/RestPage";
import RestExPage from "./components/pages/RestExPage";

import Footer from "./components/Footer";
import OfferPage from "./components/pages/OfferPage";
import NewsPageMain from "./components/pages/NewsPageMain";
import RoomPage from "./components/pages/RoomPage";
import NewsPage from "./components/pages/NewsPage";

const App = () => {
    return (
        <Router >
            <div className='wrap'>
                <Header />
                <Routes>
                    <Route path='/rooms' exact element={<Rooms />} />
                    <Route path='/rest' exact element={<RestPage />} />
                    <Route path='/offers/:offerCategory' exact element={<OfferPage />} />
                    <Route path='/rooms/:roomType' exact element={<RoomPage />} />
                    <Route path='/rest/:restType' exact element={<RestExPage />} />
                    <Route path='/' exact element={<Main />} />
                    <Route path='/news' exact element={<NewsPageMain />} />
                    <Route path='/news/:newsType' exact element={<NewsPage />} />
                    <Route path='*' exact element={<h1>page doesnt exist</h1>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App