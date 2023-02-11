import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #5a372c;
        margin: 5px 0;
    }

    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #c94b0c;
        margin-bottom: 30px;
    }
`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button {
        width: 100%;
        background: #c94b0c;
        border: none;
        font-size: 20px;
        color: #f0f0d8;
        font-weight: bold;
        padding: 20px;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
`