import React from 'react';
import styled from 'styled-components';

const PaddedDiv = styled.div`
  padding: 4rem;
`;

export const withPadding = (Story) => (
  <PaddedDiv>
    <Story />
  </PaddedDiv>
);
