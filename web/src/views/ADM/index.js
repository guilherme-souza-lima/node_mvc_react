import React, { useState, useEffect } from 'react'
import * as S from './styles'


import Header from '../../components/Header'
import Footer from '../../components/Footer'

function CarRegistration() {
    const [nome, setNome] = useState()
    const [marca, setMarca] = useState()
    const [modelo, setModelo] = useState()
    const [ano, setAno] = useState()
    const [preco, setPreco] = useState()
    const [foto, setFoto] = useState()

    async function salvar() {}

    useEffect(() =>{
        const token = localStorage.getItem("token")
        if (!token)
        window.location = "/"
    })

    return (
        <S.Container>
            <Header />
            <S.Form>

                <S.Input>
                    
                    <span>Nome</span>
                    <input type='text' placeholder='nome do veículo...'
                        onChange={e => setNome(e.target.value)} value={nome}/>
                    
                    <span>Marca</span>
                    <input type='text' placeholder='marca do veículo...'
                        onChange={e => setMarca(e.target.value)} value={marca}/>
                    
                    <span>Modelo</span>
                    <input type='text' placeholder='modelo do veículo...'
                        onChange={e => setModelo(e.target.value)} value={modelo}/>
                    
                    <span>Ano</span>
                    <input type='text' placeholder='ano do veículo...'
                        onChange={e => setAno(e.target.value)} value={ano}/>
                    
                    <span>Preço</span>
                    <input type='text' placeholder='preço do veículo...'
                        onChange={e => setPreco(e.target.value)} value={preco}/>
                    
                    <span>Foto</span>
                    <input type='file' placeholder='uma foto do veículo...'
                        onChange={e => setFoto(e.target.value)} value={foto}/>

                </S.Input>
                <S.Save>
                    <button type='button' onClick={salvar}>SALVAR</button>
                </S.Save>
                
            </S.Form>
            <Footer />
        </S.Container>
    )
}

export default CarRegistration;