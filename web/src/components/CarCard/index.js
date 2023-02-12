import React from 'react';
import * as S from './styles'

function CarCard({nome, modelo, preco, foto}) {
    const img = "./imgs/"+foto
    return (
        <S.Container>
            <S.TopCard>
                    <img src={img} alt="Foto" />
                    <h3>{nome}</h3>
                </S.TopCard>
                <S.BottomCard>
                    <strong>{modelo}</strong>
                    <span>R${preco}</span>
                </S.BottomCard>
        </S.Container>
    )
    
}
export default CarCard;
