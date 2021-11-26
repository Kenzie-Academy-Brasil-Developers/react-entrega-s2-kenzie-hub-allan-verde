import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    margin-top: 40px;
    border-right: 4px solid #e7f5ef;
    :hover {
        border-right: 4px solid var(--green);
        .card__img {
            background-color: var(--green);
        }
    }
    
    .card__img {
        height: 77px;
        width: 71px;
        border-radius: 8px;
        background-color: #e7f5ef;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .card__descript {
        padding: 5px 0 3px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
            width: 99px;
            height: 30px;
            border-radius: 8px;
            background-color: #e7f5ef;
            color: var(--green);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: lighter;
        }
    }
`