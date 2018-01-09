import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class Projects extends Component {
  constructor(props) {
    super(props);

    document.title = `Projects - Franck's portfolio`;
  }

  render() {
    return (
      <Container className="marginTop-1em">
        <div id="component-title" className="text-center">
          <h4>Projects</h4>
        </div>
      </Container>
    );
  }
}
