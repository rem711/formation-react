import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import Connexion from './components/Connexion'
import NotFound from './components/NotFound'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Connexion />
            </Route>
            <Route path="/pseudo/:pseudo" component={App} />
            <Route>
                <NotFound />
            </Route>
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))
