import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import Connexion from './components/Connexion'
import NotFound from './components/NotFound'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Connexion} />
      <Route path='/pseudo/:pseudo' component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'))
