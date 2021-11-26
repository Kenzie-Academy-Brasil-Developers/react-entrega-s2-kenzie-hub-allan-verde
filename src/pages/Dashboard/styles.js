import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1368px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 10px;

  header {
    width: 100%;
    height: 80px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--white);

    div {
      display: flex;
      flex-direction: row;
      height: 100%;
      align-items: center;
    }

    h1 {
      color: var(--grey-100);
      span {
        background-color: var(--blue);
        color: var(--white);
      }
    }
    img {
      width: 50px;
      border-radius: 50%;
    }
    button {
      margin-right: 10px;
      width: 80px;
      height: 35px;
      border-radius: 8px;
      border: 2px solid gray;
      background: transparent;
      color: gray;
    }
    button:hover {
      border-color: transparent;
      color: var(--white);
      background-color: var(--blue);
    }
  }
  main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 20px 0;
  }
  @media (min-width: 800px) {
    main {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
`;

export const ContainerGroup = styled.section`
  flex: 1;
  padding: 36px 30px 30px;
  width: 100%;
  max-width: 467px;
  min-width: 361px;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  margin: 0 0 15px;
  .cabecalho {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button {
      width: 43px;
      height: 34px;
      border-radius: 6px;
      border: 2px solid transparent;
      color: var(--white);
      background-color: var(--green);
      font-size: 1.8rem;
    }
  }
  @media (min-width: 800px) {
    margin: 0 20px 15px 0;
  }
`;
export const ContainerGroupPerfil = styled.section`
  /* font-family: Arial; */
  color: var(--white);
  flex: 1;
  min-width: 361px;
  max-width: 467px;
  width: 100%;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  .cabecalho {
    height: 104px;
    width: 100%;
    background-color: var(--blue);
    padding: 15px 32px 15px;
    display: flex;
    justify-content: start;
    align-items: flex-start;
  }
  .cabecalho .cabecalho_descript {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  .cabecalho__img {
    img {
      width: 70px;
      border-radius: 50%;
      margin-right: 15px;
    }
  }
  h4 {
    font-size: 0.7rem;
    font-weight: normal;
    font-style: italic;
    width: 123px;
  }
  .contact {
    width: 100%;
    padding: 20px 20px 0;
  }
`;
