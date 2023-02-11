import React from 'react';
import * as S from './styles'

function CarCard() {
    return (
        <S.Container>
            <S.TopCard>
                    <img src='./imgs/download.jpeg' alt="Foto" />
                    <h3>NOME CARRO</h3>
                </S.TopCard>
                <S.BottomCard>
                    <strong>MODELO</strong>
                    <span>R$ 25.000,00</span>
                </S.BottomCard>
        </S.Container>
    )
    
}
export default CarCard;
