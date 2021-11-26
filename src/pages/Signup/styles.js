import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const MiniContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    margin: 80px 0;
    width: 100%;
    max-width: 370px;
    text-align: center;
    padding: 30px 15px 50px;
    box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
    border-radius: 6px;

    h1 {
      margin-bottom: 32px;
    }

    p {
      margin-top: 8px;
    }
    span {
      font-weight: bold;
      font-size: 0.9rem;
    }
  }
`;
