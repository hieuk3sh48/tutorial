import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Projects from './Pages/Projects';
import Home from './Pages/Home';


function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/projects">
              <Projects/>
            </Route>
        </Switch>
       </div>
    </Router>
  );
}

export default App;
