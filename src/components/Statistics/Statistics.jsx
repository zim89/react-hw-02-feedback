import React, { Component } from 'react';
import { List, Span, Li } from './Styled';
import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';

export default class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    return (
      <>
        {this.props.total === 0 && (
          <Notification message="There is no feedback" />
        )}
        {this.props.total > 0 && (
          <List>
            {Object.keys(this.props).map(key => (
              <Li key={key}>
                {key}: <Span>{this.props[key]}</Span>
                {key === 'positivePercentage' && <>%</>}
              </Li>
            ))}
          </List>
        )}
      </>
    );
  }
}
