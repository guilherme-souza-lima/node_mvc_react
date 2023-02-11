import React, { useState } from 'react';
import * as S from './styles'

import api from '../../services/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Login() {
    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()

    async function Logar() {
        await api.post('/user/login', {
            usuario,
            senha
        }).then(response => {
            console.log(response.data)
        }).catch(error => {
            alert(error.response.data)
        })
    }

    return (
        <S.Container>
            <Header />
            <S.Form>

                <S.Input>
                    <span>Usuário</span>
                    <input type='text' placeholder='seu usuário...'
                    onChange={e => setUsuario(e.target.value)} value={usuario}/>
                    <span>Senha</span>
                    <input type='password' placeholder='sua senha...'
                    onChange={e => setSenha(e.target.value)} value={senha}/>
                </S.Input>
                <S.Save>
                    <button type='button' onClick={Logar}>LOGAR</button>
                </S.Save>
                
            </S.Form>
            <Footer />
        </S.Container>
    )
}

export default Login;