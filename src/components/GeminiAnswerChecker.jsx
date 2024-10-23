import React, { useState } from 'react';
import './GeminiAnswerChecker.css';

export default function GeminiAnswerChecker() {
  const [question, setQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const checkAnswer = async () => {
    setIsLoading(true);
    setError('');
    setFeedback('');

    try {
      const response = await fetch('/api/verify-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          userAnswer,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get feedback');
      }

      const data = await response.json();
      setFeedback(data.feedback);
    } catch (err) {
      setError('An error occurred while verifying your answer. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="gemini-checker">
      <h2 className="gemini-checker__title">Answer Checker powered by Gemini AI</h2>
      
      <div className="gemini-checker__form">
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input
            id="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question"
          />
        </div>

        <div className="form-group">
          <label htmlFor="answer">Your Answer</label>
          <textarea
            id="answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Enter your answer"
            rows={4}
          />
        </div>

        <button 
          onClick={checkAnswer} 
          disabled={isLoading || !question || !userAnswer}
          className={isLoading ? 'loading' : ''}
        >
          {isLoading ? (
            <>
              <span className="loader"></span>
              Checking...
            </>
          ) : (
            'Check Answer'
          )}
        </button>
        
        {error && <div className="error-message">{error}</div>}
        
        {feedback && <div className="feedback-message">{feedback}</div>}
      </div>
    </div>
  );
}