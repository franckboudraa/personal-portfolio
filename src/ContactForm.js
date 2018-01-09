/*
$.ajax({
    url: "https://formspree.io/you@email.com",
    method: "POST",
    data: {message: "hello!"},
    dataType: "json"
});
 */

import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      input: {
        email: '',
        message: '',
      },
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(prevState => {
      prevState.input[name] = value;
      return { input: prevState.input };
    });
  }

  handleSubmit() {
    const { sendForm } = this.props;
    const { email, message } = this.state.input;
    sendForm(email, message);
  }

  render() {
    const { email, message } = this.state.input;
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="with a placeholder"
              value={email}
              onChange={this.handleChange}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Text Area
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="message"
              id="message"
              className="not-resizable"
              rows="8"
              value={message}
              onChange={this.handleChange}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
