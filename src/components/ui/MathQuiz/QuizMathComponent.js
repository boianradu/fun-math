// Question.js

import React, { Component } from 'react';
import Options from './MathQuizOptionsFunction';
import PropTypes from 'prop-types';

class Question extends Component {
  static get propTypes() {
    return {
      question: PropTypes.any,
      selectedOption: PropTypes.number,
      onOptionChange: PropTypes.any,
      onSubmit: PropTypes.any,
    };
  }
  render() {
    const { question, selectedOption, onOptionChange, onSubmit } = this.props;
    console.log('Question:', this.props);
    return (
      <div className=''>
        <h3>Question {question.id}</h3>
        <h5 className='mt-2'>{question.question}</h5>
        <form onSubmit={onSubmit} className='mt-2 mb-2'>
          <Options
            options={question.options}
            selectedOption={selectedOption}
            onOptionChange={onOptionChange}
          />
          <button type='submit' className='btn btn-primary mt-2'>
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default Question;
