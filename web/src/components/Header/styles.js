import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #5a372c;
    border-bottom: 5px solid #c94b0c;
    display: flex;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img {
        width: 220px;
        height: 170px;
    }
`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
        color: #f0f0d8;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover {
            color: #c94b0c;
        }
    }

    .dividir::after {
        content: "|";
        margin: 0 10px;
        color: #f0f0d8;
    }
`