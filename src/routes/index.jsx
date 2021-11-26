import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'

function Routes() {
    const [authenticated, setAuthenticated] = useState(false)

    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/login'>
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Route>
            <Route  path='/signup'>
                <Signup authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Route>
            <Route  path='/dashboard/:user_id'>
                <Dashboard  authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Route>
        </Switch>
    )
}

export default Routes