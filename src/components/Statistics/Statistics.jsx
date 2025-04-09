import React from 'react';

const Statistics = ({ Good, Neutral, Bad, totalFeedback, positiveFeedback }) => {
    return (
        <div>
        <p>Good: {Good}</p>
        <p>Neutral: {Neutral}</p>
        <p>Bad: {Bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive feedback: {positiveFeedback}%</p>
        </div>
    );
};

export default Statistics;

