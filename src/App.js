import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles/style.scss'
import Home from './components/Home'
import Difficulty from './components/Difficulty'
import Question from './components/Question'
import Score from './components/Score'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/project-2" component={Home}/>
      <Route exact path="/project-2/difficulty/:categoryId" component={Difficulty}/>
      <Route exact path="/project-2/:categoryId/:difficultyId/question" component={Question}/>
      <Route exact path="/project-2/question/:score" component={Score} />
    </Switch>
  </BrowserRouter>
)

export default App

