import PropTypes from 'prop-types';
import { StatisticsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <StatisticsItem>
      <p>Good: {good}</p>
    </StatisticsItem>

    <StatisticsItem>
      <p>Neutral: {neutral}</p>
    </StatisticsItem>

    <StatisticsItem>
      <p>Bad: {bad}</p>
    </StatisticsItem>

    <StatisticsItem>
      <p>Total: {total}</p>
    </StatisticsItem>

    <StatisticsItem>
      <p>Positive Feedback: {positivePercentage}%</p>
    </StatisticsItem>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};