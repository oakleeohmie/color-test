import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import EntireQuiz from './components/EntireQuiz';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Welcome from './components/welcome/Welcome';
import BlueDef from './components/definitions/BlueDef';
import RedDef from './components/definitions/RedDef';
import YellowDef from './components/definitions/YellowDef';
import GreenDef from './components/definitions/GreenDef.js';
import MoreOneDef from './components/definitions/MoreOneDef'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div >

        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/welcome' component={Welcome} />
        <Route exact path='/quiz' component={EntireQuiz} />
        <Route exact path='/blue' component={BlueDef} />
        <Route exact path='/red' component={RedDef} />
        <Route exact path='/yellow' component={YellowDef} />
        <Route exact path='/green' component={GreenDef} />
        <Route exact path='/more' component={MoreOneDef} />

      </div>

    )
  }
}

export default App;