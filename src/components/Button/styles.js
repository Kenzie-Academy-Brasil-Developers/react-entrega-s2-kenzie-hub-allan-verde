import styled from 'styled-components'

export const Container = styled.button`

    background: ${(props) => (props.color === 'gray' ? '#F5F5F5' : (props.color === 'green' ? '#11995E' : '#403CAA' ) )};
    color: ${(props) => (props.color === 'gray' ? '#999999' : "#F5F5F5")};
    height: 45px;
    border-radius: 8px;
    border: 2px solid transparent;
    font-family: 'Roboto Mono', monospace;
    margin-top: 16px;
    :hover {
        border: 2px solid var(--black);
    }
    width: 100%;
    transition: 0.5s;

`