import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;
export const Content = styled.div`
  max-width: 400px;
  width: 100%;
  text-align: center;
  h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 2.5rem;
    span {
      background-color: var(--blue);
      color: var(--white);
      border-radius: 4px;
      height: 100%;
    }
  }
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
  span {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    flex-wrap: wrap;
  }
`;
