import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import FirtScreen from './../pages/FirtScreen';
import HomeScreen from './../pages/HomeScreen';
import { PageNoFound } from './../pages/PageNoFound';


const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<FirtScreen />} />
                <Route path='/home' element={<HomeScreen />} />
                <Route path='*' element={<PageNoFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter