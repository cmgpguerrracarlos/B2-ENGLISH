import { useState } from 'react';
import { PracticeQuestion } from '../types/grammar';

type PracticeCardProps = {
  question: PracticeQuestion;
};

export function PracticeCard({ question }: PracticeCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <article className="practice-card">
      <div className="practice-card-head">
        <span className="practice-type">{question.type.replace(/-/g, ' ')}</span>
        <button type="button" onClick={() => setShowAnswer((current) => !current)}>
          {showAnswer ? 'Hide answer' : 'Show answer'}
        </button>
      </div>
      <p className="practice-prompt">{question.prompt}</p>
      {question.options ? (
        <ul className="option-list">
          {question.options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      ) : null}
      {showAnswer ? (
        <div className="answer-box">
          <strong>Answer:</strong> {question.answer}
          <p>{question.explanation}</p>
        </div>
      ) : null}
    </article>
  );
}
