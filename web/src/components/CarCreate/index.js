import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import * as S from './styles'

import api from '../../services/api'

function CarRegistration() {
    const params = useParams();
    const [nome, setNome] = useState()
    const [marca, setMarca] = useState()
    const [modelo, setModelo] = useState()
    const [ano, setAno] = useState()
    const [preco, setPreco] = useState()
    const [foto, setFoto] = useState(null);

    async function LoadCarDetails() {
        api.defaults.headers.common['Authorization'] = localStorage.getItem("token");
        await api.get(`/car/${params.id}`)
        .then(response => {
            setNome(response.data.nome)
            setMarca(response.data.marca)
            setModelo(response.data.modelo)
            setAno(response.data.ano)
            setPreco(response.data.preco)
            setFoto(response.data.foto)
        })
        .catch(error => {
            console.log(error)
        })
    }

    async function salvar() {
        api.defaults.headers.common['Authorization'] = localStorage.getItem("token");
        api.defaults.headers.post['Content-Type'] = 'multipart/form-data'
        if (params.id) {
            await api.put('/car/'+params.id, {
                nome,
                marca,
                modelo,
                ano,
                foto,
                preco
            }).then(response => {
                alert(response.statusText)
                window.location = "/adm"
            }).catch(error => {
                alert(error.response.data)
            })
        } else {
            await api.post('/car/create', {
                nome,
                marca,
                modelo,
                ano,
                foto,
                preco
            }).then(response => {
                alert(response.statusText)
                window.location = "/adm"
            }).catch(error => {
                alert(error.response.data)
            })  
        }
        
    }

    useEffect(() =>{
        LoadCarDetails()
    }, [foto])

    return (
        <S.Container>
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
                        onChange={(e) => setFoto(e.target.files[0])} value={""}/>

                </S.Input>
                <S.Save>
                    <button type='button' onClick={salvar}>SALVAR</button>
                </S.Save>               
            </S.Form>
        </S.Container>
    )
}

export default CarRegistration;