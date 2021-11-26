import { Container, Content } from "./styles";
import { TextField } from "@mui/material";
import Button from "../Button";
import api from "../../service/api.js";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

const AddJob = ({ activeJob, setActiveJob }) => {
  useEffect(() => {}, []);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );

  const closeNewJob = () => {
    setActiveJob(false);
  };

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup
      .string()
      .min(10, "Minimo de 10 caracteres")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitNewJob = (data) => {
    data.deploy_url = "https://kenziehub.me";
    console.log(data);

    api
      .post("/users/works", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Cadastro realizado com sucesso");
      })
      .catch((err) => {
        toast.error("Não foi possível efetuar essa operação");
      });
  };

  return (
    <Container activeJob={activeJob}>
      <Content onSubmit={handleSubmit(onSubmitNewJob)}>
        <div className="header">
          <p>Cadastrar trabalho</p>
          <button onClick={closeNewJob}>X</button>
        </div>
        <div>
          <TextField
            margin="normal"
            fullWidth
            size="small"
            label="Nome do Trabalho"
            variant="outlined"
            helperText={errors.title?.message}
            error={!!errors.title?.message}
            {...register("title")}
          />
          <TextField
            margin="normal"
            fullWidth
            size="small"
            label="Descrição do trabalho"
            variant="outlined"
            helperText={errors.description?.message}
            error={!!errors.description?.message}
            {...register("description")}
          />
          <Button color="green" type="submit" onClick={closeNewJob}>
            Cadastrar
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default AddJob;
