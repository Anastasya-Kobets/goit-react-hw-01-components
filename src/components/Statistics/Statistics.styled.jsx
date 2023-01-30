import React from 'react';

import styled from 'styled-components';

const Card = styled.section`
  display: flex;
  justify-content: center;
  width: fit-content;
  flex-direction: column;
  background-color: white;
  text-align: center;
  margin: 32px auto 32px auto;

`;

const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

const StatList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 16px;
  background-color: ${props => {
    return props.backgroundColor;
  }};
`;

const Label = styled.span`
  margin-bottom: 8px;
`;

const Percentage = styled.span`
  font-size: 22px;
`;
export { Card, Title, StatList, StatItem, Label, Percentage };
