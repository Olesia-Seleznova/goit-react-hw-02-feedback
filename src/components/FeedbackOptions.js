import React from 'react';
import PropTypes from 'prop-types';
import { Button, Buttons } from './App.styled';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <Buttons>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}{' '}
    </Buttons>
  );
};

Feedback.propTypes = {
  options: PropTypes.array,
  feedbackButtonClick: PropTypes.func,
};
