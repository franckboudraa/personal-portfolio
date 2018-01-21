import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

import ContactForm from './ContactForm';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    document.title = `Contact - Franck's portfolio`;
    this.sendForm = this.sendForm.bind(this);
  }

  async sendForm(emailFrom, message) {
    try {
      const submitForm = await axios.post(
        'https://formspree.io/franckboudraa@gmail.com',
        {
          data: {
            name: emailFrom,
            email: emailFrom,
            message: message,
          },
        },
      );

      console.log(submitForm);
    } catch (error) {
      console.log(error);
    }
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
