import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Wrapper, Title } from './Styled';

export default class Section extends Component {
  static propTypes = { title: PropTypes.string.isRequired };

  render() {
    return (
      <Wrapper>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </Wrapper>
    );
  }
}
