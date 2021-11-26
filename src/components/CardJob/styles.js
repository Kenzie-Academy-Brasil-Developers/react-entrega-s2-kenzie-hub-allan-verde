import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    border-right: 4px solid #ECECF7;
    margin-top: 40px;
    :hover {
        border-right: 4px solid var(--blue);
        .card__img {
            background-color: var(--blue);
        }
    }
    
    .card__img {
        height: 77px;
        width: 71px;
        min-width: 71px;
        border-radius: 8px;
        background-color: #ECECF7;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card__descript {
        padding: 5px 0 3px 10px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        h4 {
            font-weight: 400;
            margin-top: 15px;
        }
    }
`