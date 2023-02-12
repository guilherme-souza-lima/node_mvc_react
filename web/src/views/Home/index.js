import React,  { useState, useEffect } from 'react';
import * as S from './styles'

import api from '../../services/api'

//nossos componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CarCard from '../../components/CarCard'

function Home() {
    const [cars, setCars] = useState([])

    async function loadCars() {
        await api.get('/car/all')
        .then(response => {
            setCars(response.data)
        })
    }

    useEffect(() =>{
        loadCars()
    }, [])

    return (
        <S.Container>
            <Header />

            <S.Content>
                {cars.map(t => (
                    <CarCard 
                        nome={t.nome} 
                        modelo={t.modelo} 
                        preco={t.preco} 
                        foto={t.foto} 
                    />
                ))}
            </S.Content>

            <Footer />
        </S.Container>
    )
}

export default Home;
