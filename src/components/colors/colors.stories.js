import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../../utils/colors';
import { typeScale } from '../../utils/typography';
import { withPadding } from '../../../.storybook/decorators';

const ColorWrapper = styled.li`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const ColorTitle = styled.h1`
  color: ${({ theme }) => theme.get('textColor')};
  font-family: ${({ theme }) => theme.get('primaryFont')};
  font-size: ${typeScale.get('header5')};
  font-weight: 400;
  line-height: 2;
`;

const ColorTile = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.get('primaryActiveBorderColor')};
  display: block;
  margin-right: 1.5rem;
  height: 6rem;
  width: 6rem;
`;

const ColorInfo = styled.div`
  color: ${({ theme }) => theme.get('textColor')};
  font-family: ${({ theme }) => theme.get('primaryFont')};
  font-size: ${typeScale.get('paragraph')};
  font-weight: 400;
  line-height: 2rem;
`;

const ColorTiles = ({ colors, title }) => (
  <React.Fragment>
    <ColorTitle>{title}</ColorTitle>
    <ul>
      {Array.from(colors).map(([step, hex], index) => (
        <ColorWrapper key={index}>
          <ColorTile style={{ backgroundColor: hex }} />
          <ColorInfo>
            {step} - {hex}
          </ColorInfo>
        </ColorWrapper>
      ))}
    </ul>
  </React.Fragment>
);

ColorTiles.propTypes = {
  colors: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export const Colors = () => (
  <React.Fragment>
    <h1>Colors</h1>
    <ColorTiles colors={colors.primaryColors} title={'Primary Colors'} />
    <ColorTiles colors={colors.neutralColors} title={'Neutral Colors'} />
    <ColorTiles colors={colors.textColors} title={'Text Colors'} />
    <ColorTiles colors={colors.successColors} title={'Success Colors'} />
    <ColorTiles colors={colors.errorColors} title={'Error Colors'} />
    <ColorTiles colors={colors.warningColors} title={'Warning Colors'} />
  </React.Fragment>
);

const signature = {
  title: 'Styling/Colors',
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
