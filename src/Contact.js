import React, { Component } from 'react';
import { Container } from 'reactstrap';
import ContactForm from './ContactForm';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    document.title = `Contact - Franck's portfolio`;
    this.sendForm = this.sendForm.bind(this);
  }

  sendForm(emailFrom, message){
    const formHeaders = new Headers();
    formHeaders.append("Content-Type", "application/json");
    /*const data = {
      message : message
    };*/
    fetch('https://formspree.io/franckboudraa@gmail.com', { method: 'POST', headers: formHeaders, mode: 'no-cors', data: message})
      .then(function(response) {
        console.log(response);
      });
    console.log('sendForm called');
    console.log(emailFrom);
    console.log(message);
}

  render() {
    return (
      <Container className="marginTop-1em">
        <div id="component-title" className="text-center">
          <h4>Contact me</h4>
        </div>
        <ContactForm sendForm={this.sendForm} />
      </Container>
    );
  }
}
