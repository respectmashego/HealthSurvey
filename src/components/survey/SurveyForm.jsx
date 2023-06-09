import React, { useState } from 'react';
import './SurveyForm.css'; // Import your CSS file for styling

const SurveyForm = () => {
  const [date, setDate] = useState('');
  const [questionerFirstName, setQuestionerFirstName] = useState('');
  const [questionerPhoneNumber, setQuestionerPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform submission logic here

    // Clear form inputs
    setDate('');
    setQuestionerFirstName('');
    setQuestionerPhoneNumber('');
  };

  return (
    <form className="survey-form" onSubmit={handleSubmit}>
      <h2>Survey Questions</h2>

      <div className="question">
        <label className="question-label">What is the date of the interview?</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="question-input"
        />
      </div>

      <div className="question">
        <label className="question-label">What is your first name?</label>
        <input
          type="text"
          value={questionerFirstName}
          onChange={(e) => setQuestionerFirstName(e.target.value)}
          required
          className="question-input"
        />
      </div>

      <div className="question">
        <label className="question-label">What is your phone number?</label>
        <input
          type="text"
          value={questionerPhoneNumber}
          onChange={(e) => setQuestionerPhoneNumber(e.target.value)}
          required
          className="question-input"
        />
      </div>

      {/* Add more questions with similar structure */}
      
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default SurveyForm
