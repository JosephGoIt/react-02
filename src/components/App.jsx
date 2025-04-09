import React, {useState} from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';


export const App = () => {
  const [feedback, setFeedback] = useState({ Good: 0, Neutral: 0, Bad: 0 });

  const handleFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  }

  const { Good, Neutral, Bad } = feedback;
  const totalFeedback = Good + Neutral + Bad;
  const positiveFeedback = Math.round((Good / totalFeedback) * 100) || 0;
  const options = ['Good', 'Neutral', 'Bad'];

  return (
    <div>
      <Section  title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? 
          <Statistics
            Good={Good}
            Neutral={Neutral}
            Bad={Bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
         : 
          <p>No feedback given</p>
        }
      </Section>
    </div>
  );
};
