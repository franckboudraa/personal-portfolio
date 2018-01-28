import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about" className="about-section section">
        <h2 className="section-title">About</h2>
        <div className="dialog">
          <h5 className="subtitle">
            I am passionate about web development and engaging with great
            enthusiasm into a professional reorientation after 10 years as a
            cook in the high-end gastronomy!
          </h5>
          <h5 className="subtitle">
            Love pugs! <em>Not the library, I prefer JSX! :)</em>
          </h5>
        </div>
      </section>
    );
  }
}

export default About;
