import React from 'react';
import * as S from './styles'

function CarCard({nome, modelo, preco, foto}) {
    const img = "./imgs/"+foto
    const valor = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
    return (
        <S.Container>
            <S.TopCard>
                    <img src={img} alt="Foto" />
                    <h3>{nome}</h3>
                </S.TopCard>
                <S.BottomCard>
                    <strong>{modelo}</strong>
                    <span>{valor}</span>
                </S.BottomCard>
        </S.Container>
    )
    
}
export default CarCard;
