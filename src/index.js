import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import './App.css'; // Import the CSS file

// import QuizComponent from './components/ui/QuizComponent';

import Quiz from './components/ui/Quiz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='center-screen'>
      <Quiz></Quiz>
    </div>
  </React.StrictMode>
);

// reportWebVitals();
