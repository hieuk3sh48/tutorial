import React, { Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './components/SignIn/SignIn.js'
import SignUp from './components/SignUp/SignUp.js'
import TimeLine from './components/TimeLine/TimeLine.js'
import User from './components/User/User.js'

class App extends Component{

  componentDidMount(){
    //localStorage.removeItem('userId');
    console.log(localStorage.getItem('userId'));
  }
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <div className='App'>
              <TimeLine/>
            </div>
          </Route>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/timeline' component={TimeLine}/>
          <Route exact path='/user' component={User}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
