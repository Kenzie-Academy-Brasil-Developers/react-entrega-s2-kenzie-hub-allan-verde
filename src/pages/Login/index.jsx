import { Redirect, useHistory } from "react-router-dom";
import api from "../../service/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useState } from 'react'
import Button from '../../components/Button'
import { Container, Content, AnimationContainer} from './styles.js'
import { TextField } from "@mui/material";

function Login({ setAuthenticated, authenticated }) {

  const [user] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:user")) || ""
  );

  const history = useHistory()

  const cadastro = () => {
    <Redirect to='/signup'/>
  }

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Minimo de 6 caracteres")
      .required("Campo obrigatório"),
  });
  
  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        toast.success("Login feito com sucesso");
        
        localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
        localStorage.setItem("@Kenziehub:user", JSON.stringify(user));
        
        setAuthenticated(true);

        history.push(`/dashboard/${user.id}`)
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email ou senha incorreto");
      });
    };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  if (authenticated) {
    return <Redirect to={`/dashboard/${user.id}`}/>
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)} >
            <h1>Login</h1>
        <TextField
          margin="normal"
          fullWidth
          size="small"
          label="E-mail"
          variant="outlined"
          helperText={errors.email?.message}
          error={!!errors.email?.message}
          {...register("email")}
        />
        <TextField
          margin="normal"
          fullWidth
          size="small"
          label="Senha"
          type="password"
          variant="outlined"
          helperText={errors.password?.message}
          error={!!errors.password?.message}
          {...register("password")}
        />
      <Button
          color='blue'
          type="submit"
        >
          Logar
        </Button>

        <p>Criar uma Página para mostrar suas</p>
        <span>habilidades metas e progresso</span>

        <Button
          color='gray'
          onClick={cadastro}
        >
          Cadastrar
        </Button>
        </form>
        </AnimationContainer>
        </Content>
    </Container>
  );
}

export default Login;
