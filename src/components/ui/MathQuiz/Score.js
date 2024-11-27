import React, { Component } from 'react';
import '../../../App.css';
import PropTypes from 'prop-types';

class Score extends Component {
  static get propTypes() {
    return {
      score: PropTypes.number,
      onNextQuestion: PropTypes.any,
    };
  }
  render() {
    const { score } = this.props;

    return (
      <div>
        <h2>Results</h2>
        <h4>Your score: {score}</h4>
      </div>
    );
  }
}

export default Score;
