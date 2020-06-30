import React from 'react';
import './App.css';
import GlobalStyle from './layouts/style/GlobalStyle.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation/Navigation.js';
import SiteTitle from './components/SiteTitle/SiteTitle.js';
import Blog from './components/Blog/Blog.js';
import Content from './components/Content/Content.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <main>
          <SiteTitle/>
          <Blog/>
          <Content/>
        </main>
        <Footer/>

        <GlobalStyle/>
      </div>
    </Router>  
  );
}

export default App;
