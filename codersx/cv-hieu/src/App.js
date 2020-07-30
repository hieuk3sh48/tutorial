import React from 'react';
import './App.css';
import Card_Custom from './components/Card_Custom';
import NavBar_Custom from './components/NavBar_Custom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Projects from './Pages/Projects';


function App() {
  return (
    <Router>
       <Switch>
          <Route exact path="/">
            <div className="App">
                <NavBar_Custom/>
                <Card_Custom/>
            </div>
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
       </Switch>
    </Router>
  );
}

export default App;
