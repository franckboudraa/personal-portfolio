import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class ProjectShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {
        title : ''
      }
    };

    document.title = `${this.state.project.title} - Franck's portfolio`;
  }

  componentDidMount(){
    switch(this.props.project){
      case 'brklyn':
        this.setState((prevState) => {
          return (
            prevState.project = {
              title: 'Brooklyn'
            }
          )});
        break;
      default:
        this.setState((prevState) => {
          return (
            prevState.project = {
              title: 'Default'
            }
          )});
    }
  }

  render() {
    document.title = `${this.state.project.title} - Franck's portfolio`;
    return (
      <Container className="marginTop-1em">
        <div id="component-title" className="text-center">
          <h4>{this.state.project.title}</h4>

        </div>
      </Container>
    );
  }
}
