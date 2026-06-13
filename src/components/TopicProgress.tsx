type TopicProgressProps = {
  totalStudySections: number;
  reviewedStudySections: number;
  practiceSolved: number;
  totalPractice: number;
  isTopicCompleted: boolean;
};

export function TopicProgress({
  totalStudySections,
  reviewedStudySections,
  practiceSolved,
  totalPractice,
  isTopicCompleted,
}: TopicProgressProps) {
  const totalUnits = totalStudySections + totalPractice;
  const completedUnits = reviewedStudySections + practiceSolved;
  const percent = totalUnits === 0 ? 0 : Math.round((completedUnits / totalUnits) * 100);
  const studyPercent = totalStudySections === 0 ? 0 : Math.round((reviewedStudySections / totalStudySections) * 100);
  const practicePercent = totalPractice === 0 ? 0 : Math.round((practiceSolved / totalPractice) * 100);

  return (
    <section className="progress-panel" aria-label="Topic progress">
      <div className="progress-panel-head">
        <div>
          <p className="eyebrow">Progress</p>
          <h2>{percent}% done</h2>
        </div>
        <span>{isTopicCompleted ? 'Topic completed' : 'In progress'}</span>
      </div>
      <div className="progress-bar" aria-hidden="true">
        <div style={{ width: `${percent}%` }} />
      </div>
      <div className="progress-detail-grid">
        <article>
          <strong>{reviewedStudySections}/{totalStudySections}</strong>
          <span>Study sections reviewed</span>
          <div className="progress-bar small" aria-hidden="true">
            <div style={{ width: `${studyPercent}%` }} />
          </div>
        </article>
        <article>
          <strong>{practiceSolved}/{totalPractice}</strong>
          <span>Practice tasks solved</span>
          <div className="progress-bar small" aria-hidden="true">
            <div style={{ width: `${practicePercent}%` }} />
          </div>
        </article>
      </div>
      <p className="progress-note">This progress is based on sections you reviewed and tasks you marked as solved on this device.</p>
    </section>
  );
}
