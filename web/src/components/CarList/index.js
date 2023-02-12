import React from 'react';
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import * as S from './styles'
import 'bootstrap/dist/css/bootstrap.min.css';

function CarList({cars}) {
    const img = "./imgs/"
   
    return (
        <S.Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Preço</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map(t => (
                        <tr>
                            <td><img src={img+t.foto} alt="Foto" /></td>
                            <td>{t.nome}</td>
                            <td>{t.marca}</td>
                            <td>{t.modelo}</td>
                            <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(t.preco)}</td>
                            <td>
                                <DropdownButton id="dropdown-basic-button">
                                    <Dropdown.Item href="#">Editar</Dropdown.Item>
                                    <Dropdown.Item href="#/">Deletar</Dropdown.Item>
                                </DropdownButton>
                            </td>
                        </tr>   
                    ))}
                </tbody>
            </Table>
        </S.Container>
        
      );
}

export default CarList;