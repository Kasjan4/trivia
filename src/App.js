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
      <Route exact path="/trivia" component={Home}/>
      <Route exact path="/trivia/difficulty/:categoryId" component={Difficulty}/>
      <Route exact path="/trivia/:categoryId/:difficultyId/question" component={Question}/>
      <Route exact path="/trivia/question/:score" component={Score} />
    </Switch>
  </BrowserRouter>
)

export default App

