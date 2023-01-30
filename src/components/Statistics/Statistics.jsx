import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Card className="statistics">
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem backgroundColor={getRandomHexColor()} key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Card>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomHexColor() {
  let colors = {
    red: 0,
    green: 0,
    blue: 0,
  }
  do {
    for (const i in colors) {
      colors[i] = Math.floor(Math.random()*255);
    }
  } while (colors.red > 150 && colors.green > 150 && colors.blue > 150);

  let resultColor = '#';
  for (const i in colors) {
    let hexColor = colors[i].toString(16);
    if (hexColor.length === 1) {
      hexColor = '0' + hexColor;
    }
    resultColor += hexColor;
  }

  return resultColor;
}

export default Statistics;
