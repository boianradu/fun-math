// Option.js
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Options extends Component {
  static get propTypes() {
    return {
      children: PropTypes.any,
      onClickOut: PropTypes.func,
      options: PropTypes.string,
      selectedOption: PropTypes.number,
      onOptionChange: PropTypes.any,
    };
  }
  render() {
    const { options, selectedOption, onOptionChange } = this.props;

    return (
      <div className='options'>
        {options.map((option, index) => (
          <div key={index} className='form-check'>
            <input
              type='radio'
              name='option'
              value={option}
              checked={selectedOption === option}
              onChange={onOptionChange}
              className='form-check-input'
            />
            <label className='form-check-label'>{option}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default Options;
