import styled from 'styled-components'

export const Container = styled.div`
    width: 250px;
    height: 250px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 15px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.5;
        
    }
    
`

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        width: 90%;
        border-radius: 10px;
    }

    h3 {
        margin-top: 5px;
        font-size: 20px;
    }

`

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    strong {
        color: #c94b0c;
        font-weight: bold;
    }

    span {
        color: #8b8b70;
    }

`