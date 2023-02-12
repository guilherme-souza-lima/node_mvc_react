import React, { useState, useEffect } from 'react'
import * as S from './styles'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import api from '../../services/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CarList from '../../components/CarList'
import CarCreate from '../../components/CarCreate'

function Panel() {

    const [cars, setCars] = useState([])

    async function loadCars() {
        await api.get('/car/all')
        .then(response => {
            setCars(response.data)
        })
    }

    useEffect(() =>{
        loadCars()
    })

    return (
        <S.Container>
            <Header />
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Lista">
                    <CarList cars={cars} />
                </Tab>
                <Tab eventKey="profile" title="Cadastrar">
                    <CarCreate />
                </Tab>
            </Tabs>
            <Footer />
        </S.Container>
    )

}

export default Panel;