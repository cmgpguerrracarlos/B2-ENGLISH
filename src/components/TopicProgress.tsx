type TopicProgressProps = {
  totalSections: number;
  completedSections: number;
};

export function TopicProgress({ totalSections, completedSections }: TopicProgressProps) {
  const percent = totalSections === 0 ? 0 : Math.round((completedSections / totalSections) * 100);

  return (
    <section className="progress-panel" aria-label="Topic progress">
      <div className="progress-panel-head">
        <div>
          <p className="eyebrow">Progress</p>
          <h2>{percent}% covered</h2>
        </div>
        <span>
          {completedSections}/{totalSections} sections
        </span>
      </div>
      <div className="progress-bar" aria-hidden="true">
        <div style={{ width: `${percent}%` }} />
      </div>
    </section>
  );
}
