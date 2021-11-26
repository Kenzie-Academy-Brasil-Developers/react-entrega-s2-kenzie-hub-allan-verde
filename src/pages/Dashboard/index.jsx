import { useState, useEffect } from "react";
import imgPerson from "../../assets/img/perfil.png";
import { Container, ContainerGroup, ContainerGroupPerfil } from "./styles.js";
import CardCurses from "../../components/CardCurses";
import CardJob from "../../components/CardJob";
import CardContact from "../../components/CardContact";
import AddJob from "../../components/AddJob";
import AddTech from "../../components/AddTech";
import { useHistory, Redirect } from 'react-router-dom'

function Dashboard( { authenticated, setAuthenticated } ) {
  const [activeJob, setActiveJob] = useState(false);
  const [activeTech, setActiveTech] = useState(false);
  const [mudanca, setMudante] = useState('')

  const addNewJob = () => {
    setActiveJob(true);
  };
  const addNewTech = () => {
    setActiveTech(true);
  };

  const history = useHistory()

  const logout = () => {
    localStorage.clear()
    setAuthenticated(false)
    return history.push('/')
  }

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:user")) || ""
  );

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("@Kenziehub:user")) || "") 
    console.log('mudou')
  }, [mudanca])

  if (!authenticated) {
    return <Redirect to='/login'/>
  }

  console.log(user)

  return (
    <Container>
      <header>
        <h1>
          Kenzie<span>Hub</span>
        </h1>
        <div>
          <button onClick={logout}>Logout</button>
        <img
          src={user.avatar_url !== null ? user.avatar_url : imgPerson}
          alt="test"
        />
        </div>
      </header>
      <main>
        <ContainerGroup>
          <div className="cabecalho">
            <h2>Minhas Tecnologias</h2>
            <button onClick={() => {
              setMudante('mudou')
              addNewTech()
            }}>+</button>
          </div>
          <div className="cards">
            {user.techs.map((item) => (
              <CardCurses key={item.id} item={item} />
            ))}
          </div>
        </ContainerGroup>

        <ContainerGroup>
          <div className="cabecalho">
            <h2>Meus trabalhos</h2>
            <button onClick={() => {
              setMudante('mudou')
              addNewJob()
            }}>+</button>
          </div>
          <div className="cards">
            {user.works.map((item) => (
              <CardJob key={item.id}item={item} />
            ))}
          </div>
        </ContainerGroup>

        <ContainerGroupPerfil>
          <div className="cabecalho">
            <div className="cabecalho__img">
              <img
                src={user.avatar_url !== null ? user.avatar_url : imgPerson}
                alt="test"
              />
            </div>
            <div className="cabecalho_descript">
              <h3>{user.name}</h3>
              <h4>{user.course_module}</h4>
            </div>
          </div>
          <div className="contact">
            <CardContact item={user.contact} />
          </div>
        </ContainerGroupPerfil>
      </main>
      <AddJob
        activeJob={activeJob}
        setActiveJob={setActiveJob}
      />
      <AddTech
        activeTech={activeTech}
        setActiveTech={setActiveTech}
      />
    </Container>
  );
}

export default Dashboard;
