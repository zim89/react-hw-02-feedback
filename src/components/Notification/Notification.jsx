import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Wrapper } from './Styled';

export default class Notification extends Component {
  static propTypes = { message: PropTypes.string.isRequired };

  render() {
    return <Wrapper>{this.props.message}</Wrapper>;
  }
}
