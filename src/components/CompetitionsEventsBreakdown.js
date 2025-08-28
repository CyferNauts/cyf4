import React from 'react';
import './CompetitionsEventsBreakdown.css';

const CompetitionsEventsBreakdown = () => {
  return (
    <div className="competitions-events-breakdown">
      <h1>Competitions / Events Breakdown</h1>
      <button onClick={() => window.location.href = '/events'}>Go to Events Panel</button>
      <section>
        <h2>Format</h2>
        <p>Details about the format of the competitions/events.</p>
      </section>
      <section>
        <h2>Rules</h2>
        <p>Details about the rules for participation.</p>
      </section>
      <section>
        <h2>Schedules</h2>
        <p>Details about the schedules for the events.</p>
      </section>
      <section>
        <h2>Eligibility</h2>
        <p>Details about eligibility criteria for participants.</p>
      </section>
      <section>
        <h2>Submission Guidelines</h2>
        <p>Details about submission guidelines for entries.</p>
      </section>
    </div>
  );
};

export default CompetitionsEventsBreakdown;
