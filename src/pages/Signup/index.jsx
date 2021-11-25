import { useHistory, Redirect, Link } from 'react-router-dom'
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
  MenuItem,
  InputLabel,
  FormControl,
  Select,
} from "@mui/material";

import { useState } from "react";

function Signup( { authenticated, setAuthenticated } ) {
  const history = useHistory()

  const [module, setModule] = useState("Module");

  const handleChange = (e) => {
    setModule(e.target.value);
  };

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Minimo de 6 caracteres")
      .required("Campo obrigatório"),
    confirm_Password: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    name: yup.string().required("CAmpo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const onSubmitFunction = (data) => {
    delete data.confirm_Password;
    console.log(data);
    api
      .post("/users", data)
      .then((response) => {
        console.log(response);
        toast.success('Cadastro realizado com sucesso')
        return history.push('/login')
      })
      .catch((err) => {
        console.log(err)
        toast.error('email já cadastrado')
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
    <>
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
            Sign In
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
          <TextField
            margin="normal"
            fullWidth
            size="small"
            label="Confirme sua senha"
            type="password"
            variant="outlined"
            helperText={errors.confirm_Password?.message}
            error={!!errors.confirm_Password?.message}
            {...register("confirm_Password")}
          />
          <TextField
            margin="normal"
            fullWidth
            size="small"
            label="Seu nome"
            variant="outlined"
            helperText={errors.name?.message}
            error={!!errors.name?.message}
            {...register("name")}
          />
          <TextField
            margin="normal"
            fullWidth
            size="small"
            label="Bio"
            variant="outlined"
            helperText={errors.bio?.message}
            error={!!errors.bio?.message}
            {...register("bio")}
          />
          <TextField
            margin="normal"
            fullWidth
            size="small"
            label="Contato"
            variant="outlined"
            helperText={errors.contact?.message}
            error={!!errors.contact?.message}
            {...register("contact")}
          />

          <FormControl
            fullWidth
            margin="dense"
            variant="standard"
            sx={{ minWidth: 200 }}
          >
            <InputLabel id="curse_module">Module</InputLabel>
            <Select
              labelId="curse_module"
              fullWidth
              {...register("course_module")}
              onChange={handleChange}
              value={module}
              label="Module"
            >
              <MenuItem value={"Primeiro módulo (Introdução ao Frontend)"}>
                Primeiro módulo (Introdução ao Frontend)
              </MenuItem>
              <MenuItem value={"Segundo módulo (Frontend Avançado)"}>
                Segundo módulo (Frontend Avançado)
              </MenuItem>
              <MenuItem value={"Terceiro módulo (Introdução ao Backend)"}>
                Terceiro módulo (Introdução ao Backend)
              </MenuItem>
              <MenuItem value={"Quarto módulo (Backend Avançado)"}>
                Quarto módulo (Backend Avançado)
              </MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar
          </Button>

          <p>
            Já possui uma conta? Faça seu <Link to="/login">login</Link>
          </p>
        </Box>
      </Container>
    </>
  );
}

export default Signup;
