import React from 'react';
import styled from 'styled-components';

const IconCloseWrapper = styled.svg`
  height: 100%;
  width: 100%;
`;

export const IconFavourite = () => {
  return (
    <IconCloseWrapper
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      aria-hidden={true}
    >
      <polygon
        fill="currentColor"
        points="50,5 63.91,34.63 95,39.38 72.5,62.44 77.81,95 50,79.63 22.19,95 27.5,62.44 5,39.38 36.09,34.63"
      />
    </IconCloseWrapper>
  );
};
