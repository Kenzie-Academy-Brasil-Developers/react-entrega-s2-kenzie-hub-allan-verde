import { Link, Redirect } from "react-router-dom"; 
import api from "../../service/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from 'react-hot-toast';


import {
  Container,
  CssBaseline,
  Box,
  TextField,
  Typography,
  Button,
} from "@mui/material";

function Login( { setAuthenticated, authenticated } ) {
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
        
        const { token } = response.data
        
        localStorage.setItem('@Kenziehub:token', JSON.stringify(token))

        setAuthenticated(true)

        console.log(response);
        toast.success('Login feito com sucesso')
      
      })
      .catch((err) => {
        console.log(err)
        toast.error('Email ou senha incorreto')
      });

  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

if (authenticated) {
  return <Redirect to='/dashboard'/>
}

  return (
    <Container component="main" maxWidth="xs">
  <CssBaseline />
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mt: 6,
    }}
    onSubmit={handleSubmit(onSubmitFunction)}
    component="form"
  >
    <Typography component="h1" variant="h4">
      Login
    </Typography>

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

    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
      Enviar
    </Button>

    <p>
      Não tem uma conta? Faça seu <Link to="/signup">cadastro</Link>
    </p>
  </Box>
</Container>
  );
}

export default Login;
