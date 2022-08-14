import React from 'react'
import './styles/main.scss'
import Header from "./components/Header";
import Main from "./components/Main";
import Section1 from "./components/Section1";
import {Route, Routes} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import Undefined from "./components/pages/Undefined";
import Rooms from "./components/pages/Rooms";
import RestPage from "./components/pages/RestPage";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/rooms' exact element={<Rooms />} />
                <Route path='/rest' exact element={<RestPage />} />
                <Route path='/' exact element={<Main />} />
                <Route path='*' exact element={<h1>page doesnt exist</h1>} />
            </Routes>
        </Router>
    )
}

export default App