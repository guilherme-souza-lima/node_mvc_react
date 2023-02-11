import React from 'react';
import * as S from './styles'

// import api from '../../services/api'

//nossos componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CarCard from '../../components/CarCard'

function Home() {
    return (
        <S.Container>
            <Header />

            <S.Content>
                <CarCard />
                <CarCard />
            </S.Content>

            <Footer />
        </S.Container>
    )
}

export default Home;
