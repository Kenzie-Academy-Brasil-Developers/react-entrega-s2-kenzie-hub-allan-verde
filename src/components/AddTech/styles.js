import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: rgba(0,0,0,0.6);
  display: ${props => props.activeTech ? 'inherit' : 'none'}
`;
export const Content = styled.form`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  background-color: var(--grey-0);
  border-radius: 6px;
  padding: 30px 40px 35px;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    p {
      font-weight: bold;
      color: var(--grey-100);
      font-size: 1rem;
    }
    button {
      background-color: transparent;
      border: none;
      color: var(--grey-50);
      font-size: 1.5rem;
    }
  }
`;
