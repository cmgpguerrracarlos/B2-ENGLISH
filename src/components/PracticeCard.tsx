import { useState } from 'react';
import { PracticeQuestion } from '../types/grammar';
import { formatPracticeType } from '../utils/topicUi';

type PracticeCardProps = {
  question: PracticeQuestion;
  isCompleted: boolean;
  onToggleCompleted: (practiceId: string) => void;
};

export function PracticeCard({ question, isCompleted, onToggleCompleted }: PracticeCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <article className="practice-card">
      <div className="practice-card-head">
        <span className="practice-type">{formatPracticeType(question.type)}</span>
        <div className="practice-actions">
          <button type="button" onClick={() => setShowAnswer((current) => !current)}>
            {showAnswer ? 'Hide answer' : 'Show answer'}
          </button>
          <button
            type="button"
            className={isCompleted ? 'practice-complete-button active' : 'practice-complete-button'}
            onClick={() => onToggleCompleted(question.id)}
            aria-pressed={isCompleted}
          >
            {isCompleted ? 'Solved' : 'Mark solved'}
          </button>
        </div>
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
