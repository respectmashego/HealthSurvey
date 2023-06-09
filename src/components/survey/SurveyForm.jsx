import React, { useState } from 'react';
import './SurveyForm.css';

const SurveyForm = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [questionerFirstName, setQuestionerFirstName] = useState('');
  const [questionerPhoneNumber, setQuestionerPhoneNumber] = useState('');

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform submission logic here
    const data = {
      date,
      questionerFirstName,
      questionerPhoneNumber,
      // Add more properties for other questions
    };

    // Send data to the server using an API (replace <API_URL> with the actual URL)
    fetch('<API_URL>', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        // Handle the response from the server
        console.log(response);
        // Clear form inputs
        setDate('');
        setQuestionerFirstName('');
        setQuestionerPhoneNumber('');
        setStep(1); // Reset the form to the initial step
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const renderQuestions = () => {
    switch (step) {
      case 1:
        return (
          <>
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
            <button type="button" className="next-button" onClick={handleNext}>
              Next
            </button>
          </>
        );
      case 2:
        return (
          <>
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
            {/* Add more questions for step 2 */}
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button type="button" className="previous-button" onClick={() => setStep(step - 1)}>
              Previous
            </button>
          </>
        );
      // Add more cases for additional steps/questions
      default:
        return null;
    }
  };

  return (
    <form className="survey-form" onSubmit={handleSubmit}>
      <h2>Survey Questions</h2>
      {renderQuestions()}
    </form>
  );
};

export default SurveyForm;
