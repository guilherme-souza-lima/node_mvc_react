import React, { useState, useEffect } from 'react'
import * as S from './styles'

import api from '../../services/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CarList from '../../components/CarList'

function Panel() {

    const [cars, setCars] = useState([])

    async function loadCars() {
        await api.get('/car/all')
        .then(response => {
            setCars(response.data)
        })
    }

    useEffect(() =>{
        const token = localStorage.getItem("token")
        if (!token)
        window.location = "/"
        loadCars()
    }, [])

    return (
        <S.Container>
            <Header adm={true} />
            <CarList cars={cars} />
            <Footer />
        </S.Container>
    )

}

export default Panel;