import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../views/Home'
import Login from '../views/Login'
import Panel from '../views/AdministrativePanel'
import Create from '../views/Create'

export default function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"         element={<Home  />} />
                <Route path="/login"    element={<Login />} />
                <Route path="/adm"      element={<Panel  />} />
                <Route path="/create"   element={<Create  />} />
                <Route path="/create/:id"element={<Create  />} />
            </Routes>
        </BrowserRouter>
    )
}