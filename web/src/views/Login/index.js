import React from 'react';
import * as S from './styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Login() {

    async function Logar() {}


    return (
        <S.Container>
            <Header />
            <S.Form>

                <S.Input>
                    <span>Usuário</span>
                    <input type='text' placeholder='seu usuário...'/>
                    <span>Senha</span>
                    <input type='password' placeholder='sua senha...'/>
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