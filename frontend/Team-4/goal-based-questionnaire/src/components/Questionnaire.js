import React, { useState } from 'react';
import QuestionRadio from './QuestionRadio';
import QuestionRanking from './QuestionRanking';
import ProgressBar from './ProgressBar'; // Import ProgressBar component
import './Questionnaire.css';


const questions = [
  { id: 1, question: "Rank your primary objectives for your investment portfolio", type: "drag-and-drop", options: ["Retirement Savings", "Wealth Accumulation", "Specific Purchase"] },
  { id: 2, question: "Specify Your timeline", type: "radio", options: ["> 5 Years", " ~ 1 Year", "< 1 Year", " < 3 Months"] },
  { id: 3, question: "Which of these accounts do you contribute to most", type: "radio", options: ["401K", "Roth IRA", "Self Directed Brokerage Account"] },
  { id: 4, question: "What is your income range?", type: "radio", options: ["$200K+", "~$100k", "< $100k", "< $50K"] },
  { id: 5, question: "Which of the following assets and investments do you have?", type: "radio", options: ["Savings Accounts", "Stocks", "Bonds", "Real Estate"]} ,
  { id: 6, question: "How would you describe your investment knowledge?", type: "radio", options: ["Very inexperienced", "Somewhat inexperienced", "Somewhat experienced", "Experienced", "Very experienced"]}
];

function Questionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  
  const progressPercentage = ((currentQuestionIndex +1) / (questions.length)) * 100;
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmit = () => {
    console.log('Final Answers:', answers);
    // Add functionality for submit button here
  };

  const renderQuestionInput = () => {
    switch (currentQuestion.type) {
      case 'radio':
        return (
          <QuestionRadio
            options={currentQuestion.options}
            selectedOption={answers[currentQuestion.id]}
            onChange={(option) => handleOptionChange(currentQuestion.id, option)}
          />
        );
      case 'drag-and-drop':
        return (
          <QuestionRanking
            items={answers[currentQuestion.id] || currentQuestion.options}
            setItems={(newItems) => handleOptionChange(currentQuestion.id, newItems)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="survey-container">
      <div className="title-with-logo">
      <img src={process.env.PUBLIC_URL + '/utdfintechlogo1.png'} alt="Fintech Logo" className="fintech-logo" />
        <h1 className="survey-title">Goal-Based Questionnaire</h1>
      </div>

      <ProgressBar percentage={progressPercentage} />

      <div className="progress">
        <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
      </div>

      <div className="question">
        {currentQuestion.question}
      </div>

      {renderQuestionInput()}

      <div className="buttons">
        {currentQuestionIndex > 0 && (
          // 
          <button className="button button1" onClick={goToPreviousQuestion}>Back</button>
        )}
        {currentQuestionIndex < questions.length - 1 ? (
          // 
          <button className="button button2" onClick={goToNextQuestion}>Next</button>
        ) : (
          // 
          <button className="button special-button" onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default Questionnaire;

