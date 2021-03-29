import React from 'react';
import styled from 'styled-components';
import { IconClose, IconFavourite } from '../icons';
import { typeScale } from '../../utils/typography';
import { withPadding } from '../../../.storybook/decorators';

const IconGrid = styled.ul`
  align-items: start;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, 10rem);
  justify-items: start;
  list-style: none;
  padding: 0;
`;

const IconEntry = styled.li`
  align-items: center;
  border: 0.1rem solid ${({ theme }) => theme.get('primaryActiveBorderColor')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.5rem;
  width: 100%;
`;

const IconEntryFrame = styled.div`
  color: ${({ theme }) => theme.get('primaryColor')};
  height: 6.4rem;
  margin-bottom: 1rem;
  width: 6.4rem;
`;

const IconEntryTitle = styled.div`
  color: ${({ theme }) => theme.get('textColor')};
  font-family: ${({ theme }) => theme.get('primaryFont')};
  font-size: ${typeScale.get('paragraph')};
  font-weight: 400;
  line-height: 2rem;
`;

export const Icons = () => (
  <React.Fragment>
    <h1>Icons</h1>

    <IconGrid>
      <IconEntry>
        <IconEntryFrame>
          <IconClose />
        </IconEntryFrame>
        <IconEntryTitle>Close</IconEntryTitle>
      </IconEntry>

      <IconEntry>
        <IconEntryFrame>
          <IconFavourite />
        </IconEntryFrame>
        <IconEntryTitle>Favourite</IconEntryTitle>
      </IconEntry>
    </IconGrid>
  </React.Fragment>
);

const signature = {
  title: 'Styling/Icons',
  decorators: [withPadding],
  parameters: {
    controls: {
      disabled: true,
    },
    options: {
      showAddonPanel: false,
    },
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
};

export default signature;
