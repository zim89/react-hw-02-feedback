import React, { Component } from 'react';
import { List, Button } from 'components/FeedbackOptions/Styled';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <List>
        {this.props.options.map(el => (
          <li key={el}>
            <Button name={el} onClick={this.props.handleClick}>
              {el}
            </Button>
          </li>
        ))}
      </List>
    );
  }
}
