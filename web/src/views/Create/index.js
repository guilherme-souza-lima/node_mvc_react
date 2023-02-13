import React, {useEffect} from 'react'
import * as S from './styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CarCreate from '../../components/CarCreate'

function Create() {
    useEffect(() =>{
        const token = localStorage.getItem("token")
        if (!token) 
        window.location = "/"     
    }, [])

    return (
        <S.Container>
            <Header adm={true} />
            <CarCreate />
            <Footer />
        </S.Container>
    )
    
}
export default Create;