import React from 'react';
import * as S from './styles'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/default_transparent_765x625.png'

function Header({adm}) {
    function clearLocalStorage() {
        localStorage.clear();
        window.location = "/"
    }
    if (adm) {
        return (
            <S.Container>
                <S.LeftSide>
                    <img src={logo} alt="Logo" />
                </S.LeftSide>
                <S.RightSide>
                    <Link to="/">INÍCIO</Link>
                    <span className='dividir' />
                    <Link to="/adm">LISTA</Link>
                    <span className='dividir' />
                    <Link to="/create">CADASTRO</Link>
                    <span className='dividir' />
                    <Link onClick={clearLocalStorage}>SAIR</Link>
                </S.RightSide>
            </S.Container>
        )
    }
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo" />
            </S.LeftSide>
            <S.RightSide>
                <Link to="/">INÍCIO</Link>
                <span className='dividir' />
                <Link to="/login">LOGAR ADM</Link>
            </S.RightSide>
        </S.Container>
    )
    
}
export default Header ;
