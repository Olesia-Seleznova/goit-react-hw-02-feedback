import PropTypes from 'prop-types';
import { Button } from './App.styled';

export const Feedback = ({ options, onLeaveFeedback }) => {
  options.map(option => {
    return (
      <Button
        type="button"
        key={option}
        name={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    );
  });
};

Feedback.propTypes = {
  options: PropTypes.array,
  feedbackButtonClick: PropTypes.func,
};
