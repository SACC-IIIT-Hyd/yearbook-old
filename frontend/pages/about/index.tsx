import { useState } from 'react';

const questions = [
  'What was your favorite memory from Felicity? ',
  'What was your craziest memory from your time here in IIIT? ',
  'If you could go back to your faccha self, what would be the one piece of advice you would give them about life in IIIT? ',
  // Add more questions as needed
];

const QuestionsPage = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // Handle submission logic, e.g., send answers to a server
    console.log('Submitted answers:', answers);

    // Clear the answers and set the submitted flag to true
    setAnswers(Array(questions.length).fill(''));
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#333', marginBottom: '100px' }}>Fill this questionnaire about you</h1>
      <div style={{ textAlign: 'left', maxWidth: '600px', margin: 'auto' }}>
        {questions.map((question, index) => (
          <div key={index} style={{ marginBottom: '50px' }}>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>{question}</p>
            <input
              type="text"
              value={answers[index]}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            />
          </div>
        ))}
      </div>
      {submitted ? (
        <p style={{ color: '#4CAF50', fontSize: '18px', marginTop: '10px' }}>
          Answers submitted successfully!
        </p>
      ) : (
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default QuestionsPage;
