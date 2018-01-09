import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './css/App.css';

import Header from './layouts/Header';
import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';
//import Projects from './Projects';
import ProjectShow from "./ProjectShow";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects/brklyn" render={()=><ProjectShow project="brklyn" />} />
          <Route exact path="/" component={Homepage} />
        </div>
      </div>
    );
  }
}

export default App;
