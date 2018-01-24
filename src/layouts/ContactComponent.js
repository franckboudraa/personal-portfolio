import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from './ContactForm';

class ContactComponent extends Component {
  render() {
    console.log(this.props.contact);
    return (
      <ContactForm
        loading={this.props.contact.loading}
        success={this.props.contact.success}
      />
    );
  }
}

function mapStateToProps({ contact }) {
  return { contact };
}

export default connect(mapStateToProps, null)(ContactComponent);
