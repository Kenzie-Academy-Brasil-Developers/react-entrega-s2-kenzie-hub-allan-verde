import { useHistory } from "react-router-dom";
import { Container, Content } from "./styles";
import Button from "../../components/Button";

function Home() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <Content>
        <h1>
          Kenzie<span>Hub</span>
        </h1>
        <div>
          <Button onClick={() => handleNavigation("./login")} color="green">
            Login
          </Button>
          <Button onClick={() => handleNavigation("./signup")} color="blue">
            Cadastre-se
          </Button>
        </div>
      </Content>
    </Container>
  );
}

export default Home;
