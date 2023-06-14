import React, { useState } from 'react';
import './SurveyForm.css';

const SurveyForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    questionerFirstName: '',
    questionerPhoneNumber: '',
    numberOfChildren: 0,
    children: [], // Array to store child details
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
   

    // Send formData to the server using an API (replace <API_URL> with the actual URL)
    fetch('<API_URL>', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        // Clear form inputs and reset step
        setFormData({
          date: '',
          questionerFirstName: '',
          questionerPhoneNumber: '',
          numberOfChildren: 0,
          children: [],
        });
        setStep(1);
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
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="question-input"
              />
            </div>
            <div className="question">
              <label className="question-label">How many children do you have?</label>
              <input
                type="number"
                name="numberOfChildren"
                value={formData.numberOfChildren}
                onChange={handleInputChange}
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
                name="questionerPhoneNumber"
                value={formData.questionerPhoneNumber}
                onChange={handleInputChange}
                required
                className="question-input"
              />
            </div>
            {renderChildInputs()}
            <button type="button" className="previous-button" onClick={() => setStep((prevStep) => prevStep - 1)}>
              Previous
            </button>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </>
        );
      default:
        return null;
    }
  };

  const renderChildInputs = () => {
    const { numberOfChildren } = formData;

    if (numberOfChildren > 0) {
      const childInputs = [];

      for (let i = 0; i < numberOfChildren; i++) {
        const childIndex = i;
        const childName = `childName_${childIndex}`;

        childInputs.push(
          <div key={childIndex}>
            <h3>Child {childIndex + 1}</h3>
            <div className="question">
              <label className="question-label">Child's Name:</label>
              <input
                type="text"
                name={childName}
                value={formData.children[childIndex]?.childName || ''}
                onChange={(e) => handleChildInputChange(childIndex, e)}
                required
                className="question-input"
              />
            </div>
            {/* Add more questions for each child */}
          </div>
        );
      }

      return childInputs;
    }

    return null;
  };

  const handleChildInputChange = (childIndex, e) => {
    const { name, value } = e.target;
    const updatedChildren = [...formData.children];
    updatedChildren[childIndex] = { ...updatedChildren[childIndex], childName: value };
    setFormData((prevData) => ({
      ...prevData,
      children: updatedChildren,
    }));
  };

  return (
    <form className="survey-form" onSubmit={handleSubmit}>
      <h2>Survey Questions</h2>
      {renderQuestions()}
    </form>
  );
};

export default SurveyForm;
