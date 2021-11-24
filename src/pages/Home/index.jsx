import { useHistory } from 'react-router-dom'

function Home() {
    const history = useHistory()

    const handleNavigation = (path) => {
        return history.push(path)
    }

    return (
        <>
            <h1>Kenzie<span>Hub</span></h1>
            <div>
                <button onClick={() => handleNavigation('/signup') } >Cadastre-se</button>
                <button onClick={() => handleNavigation('/login') } >Login</button>
            </div>
        </>
    )
}

export default Home