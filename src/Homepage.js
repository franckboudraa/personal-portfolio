import React, { Component } from 'react';

import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

export default class Homepage extends Component {
  render() {
    return (
      <div className="wrapper container">
        <About />
        <Experiences />
        <Skills />
        <Education />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}
