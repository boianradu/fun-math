import React, { useState } from 'react';
import '../../App.css'; // Import the CSS file

// Sample quizzes array
const quizzes = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
  },
];

const QuizComponent = () => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0); // Track current quiz
  const [selectedAnswer, setSelectedAnswer] = useState(''); // Track selected answer

  const handleNextQuiz = () => {
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedAnswer(''); // Reset selected answer for the next quiz
    } else {
      alert("You've completed the quiz!");
    }
  };

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const currentQuiz = quizzes[currentQuizIndex];

  return (
    <div className='quiz-container'>
      <h2>{currentQuiz.question}</h2>
      <form>
        {currentQuiz.options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type='radio'
                name='quiz-option'
                value={option}
                checked={selectedAnswer === option}
                onChange={handleAnswerChange}
              />
              {option}
            </label>
          </div>
        ))}
      </form>
      <div className='button-container'>
        <button
          onClick={handleNextQuiz}
          disabled={!selectedAnswer} // Disable button if no answer is selected
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizComponent;
