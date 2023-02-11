import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../views/Home'
import Login from '../views/Login'
import Car from '../views/ADM'

export default function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"         element={<Home  />} />
                <Route path="/login"    element={<Login />} />
                <Route path="/car"      element={<Car   />} />
            </Routes>
        </BrowserRouter>
    )
}