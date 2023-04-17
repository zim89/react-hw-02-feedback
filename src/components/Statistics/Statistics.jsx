import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { List, Span, Li } from './Styled';
import Notification from 'components/Notification/Notification';

export default class Statistics extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        {this.props.total === 0 && (
          <Notification message="There is no feedback" />
        )}
        {this.props.total > 0 && (
          <List>
            {Object.keys(this.props).map(key => (
              <Li key={nanoid(5)}>
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
