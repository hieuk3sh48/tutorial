import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import {
  Navbar,
  Nav,
} from 'react-bootstrap';

import Header from './layout/Header/Header.component';
import Buy from './component/Buy/Buy.component';
import Product from './component/Product/Product.component';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/'>
            <div className="App">
                <Header/>
            </div>
          </Route>
          <Route exact path='/product' component={Product}/>
          <Route exact path='/buy' component={Buy}/>
        </Switch>
    </Router>
  );
}

export default App;
