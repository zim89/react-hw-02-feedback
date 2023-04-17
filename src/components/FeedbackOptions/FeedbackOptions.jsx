import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { List, Button } from 'components/FeedbackOptions/Styled';

export default class FeedbackOptions extends Component {
  static propTypes = {};

  render() {
    return (
      <List>
        {this.props.options.map(el => (
          <li key={nanoid(10)}>
            <Button name={el} onClick={this.props.handleClick}>
              {el}
            </Button>
          </li>
        ))}
      </List>
    );
  }
}
