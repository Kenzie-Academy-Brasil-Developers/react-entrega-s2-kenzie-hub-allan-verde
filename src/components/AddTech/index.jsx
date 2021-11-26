import { useState } from "react";
import { Container, Content } from "./styles";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Button from "../Button";
import api from "../../service/api.js";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

const AddTech = ({ activeTech, setActiveTech }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );

  const [tech, setTech] = useState("Tech");

  const closeNewTech = () => {
    setActiveTech(false);
  };

  const handleChange = (e) => {
    setTech(e.target.value);
  };

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitNewTech = (data) => {
    console.log(data);
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        toast.success("Cadastro realizado com sucesso");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possível efetuar essa operação");
      });
  };

  return (
    <Container activeTech={activeTech}>
      <Content onSubmit={handleSubmit(onSubmitNewTech)}>
        <div className="header">
          <p>Cadastrar tecnologia</p>
          <button onClick={closeNewTech}>X</button>
        </div>
        <div>
        <TextField
          margin="normal"
          fullWidth
          size="small"
          label="Nome do Tech"
          variant="outlined"
          helperText={errors.title?.message}
          error={!!errors.title?.message}
          {...register("title")}
        />
        <FormControl
          fullWidth
          margin="dense"
          variant="standard"
          sx={{ minWidth: 200 }}
        >
          <InputLabel id="curse_module">Selecionar status:</InputLabel>
          <Select
            labelId="curse_module"
            fullWidth
            {...register("status")}
            onChange={handleChange}
            value={tech}
            label="Tech"
          >
            <MenuItem value={"Iniciante"}>Iniciante</MenuItem>
            <MenuItem value={"Intermediário"}>Intermediário</MenuItem>
            <MenuItem value={"Avançado"}>Avançado</MenuItem>
          </Select>
        </FormControl>
        <Button color="green" type="submit" onClick={closeNewTech}>
          Cadastrar
        </Button>
        </div>
      </Content>
    </Container>
  );
};

export default AddTech;
