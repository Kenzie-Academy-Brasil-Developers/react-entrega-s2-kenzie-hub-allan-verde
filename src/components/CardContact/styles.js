import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: start;
    border-right: 4px solid #ECECF7;
    margin-bottom: 20px;
    .fig {
        width: 50px;
        height: 50px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 8px;
        background-color: ${props => props.cor === 'green' ? '#11995E' : '#403CAA'};
        img {
            width: 50%;
        }
    }
`