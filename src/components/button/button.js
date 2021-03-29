import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { typeScale } from '../../utils/typography';

/**
 * Having to wrap styled components in a functional component
 * is an issue due to Storybook "controls" addon not reading
 * the components and their proptypes correctly.
 *
 * More Information:
 * https://github.com/storybookjs/storybook/issues/11933
 */

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.get('paragraph')};
    height: 3.8rem;
  `,
  large: () => `
    font-size: ${typeScale.get('header3')};
    height: 7.3rem;
    padding: 0 4.7rem;
  `,
  warning: ({ theme }) => `
    background-color: ${theme.get('status').get('warningColor')};
    border-color: ${theme.get('status').get('warningColor')};
    color: ${theme.get('textColorInverted')};

    &:hover {
      background-color: ${theme.get('status').get('warningColorHover')};
      border-color: ${theme.get('status').get('warningColorHover')};
      color: ${theme.get('textColorInverted')};
    }

    &:focus {
      background-color: ${theme.get('status').get('warningColor')};
      border-color: ${theme.get('status').get('warningColorFocusBorderColor')};
      color: ${theme.get('textColorInverted')};
    }

    &:active {
      background-color: ${theme.get('status').get('warningColorActive')};
      border-color: ${theme.get('status').get('warningColorFocusBorderColor')};
      color: ${theme.get('textColorInverted')};
    }
  `,
  error: ({ theme }) => `
    background-color: ${theme.get('status').get('errorColor')};
    border-color: ${theme.get('status').get('errorColor')};
    color: ${theme.get('textColorInverted')};

    &:hover {
      background-color: ${theme.get('status').get('errorColorHover')};
      border-color: ${theme.get('status').get('errorColorHover')};
      color: ${theme.get('textColorInverted')};
    }

    &:focus {
      background-color: ${theme.get('status').get('errorColor')};
      border-color: ${theme.get('status').get('errorColorFocusBorderColor')};
      color: ${theme.get('textColorInverted')};
    }

    &:active {
      background-color: ${theme.get('status').get('errorColorActive')};
      border-color: ${theme.get('status').get('errorColorFocusBorderColor')};
      color: ${theme.get('textColorInverted')};
    }
  `,
  success: ({ theme }) => `
    background-color: ${theme.get('status').get('successColor')};
    border-color: ${theme.get('status').get('successColor')};
    color: ${theme.get('textColorInverted')};

    &:hover {
      background-color: ${theme.get('status').get('successColorHover')};
      border-color: ${theme.get('status').get('successColorHover')};
      color: ${theme.get('textColorInverted')};
    }

    &:focus {
      background-color: ${theme.get('status').get('successColor')};
      border-color: ${theme.get('status').get('successColorFocusBorderColor')};
      color: ${theme.get('textColorInverted')};
    }

    &:active {
      background-color: ${theme.get('status').get('successColorActive')};
      border-color: ${theme.get('status').get('successColorFocusBorderColor')};
      color: ${theme.get('textColorInverted')};
    }
  `,
};

const Button = styled.button`
  align-items: center;
  border: 0.2rem solid transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: ${({ theme }) => theme.get('primaryFont')};
  font-size: ${typeScale.get('header5')};
  font-weight: 400;
  height: 5rem;
  justify-content: center;
  padding: 0 1.7rem;
  transition: background-color 200ms, border-color 200ms, color 200ms;
`;

const primaryStates = css`
  &:hover {
    background-color: ${({ theme }) => theme.get('primaryHoverColor')};
    color: ${({ theme }) => theme.get('textColorOnPrimary')};
    border-color: ${({ theme }) => theme.get('primaryHoverColor')};
  }

  &:focus {
    background-color: ${({ theme }) => theme.get('primaryColor')};
    border-color: ${({ theme }) => theme.get('primaryFocusBorderColor')};
    color: ${({ theme }) => theme.get('textColorOnPrimary')};
  }

  &:active {
    background-color: ${({ theme }) => theme.get('primaryActiveColor')};
    border-color: ${({ theme }) => theme.get('primaryActiveBorderColor')};
    color: ${({ theme }) => theme.get('textColorOnPrimary')};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.get('disabled')};
    border-color: ${({ theme }) => theme.get('disabled')};
    color: ${({ theme }) => theme.get('textColorOnPrimary')};
    cursor: not-allowed;
  }
`;

const _PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.get('primaryColor')};
  border-color: ${({ theme }) => theme.get('primaryColor')};
  color: ${({ theme }) => theme.get('textColorOnPrimary')};

  ${primaryStates}
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const PrimaryButton = ({ children, ...props }) => {
  return <_PrimaryButton {...props}>{children}</_PrimaryButton>;
};

PrimaryButton.propTypes = {
  /** Any renderable node */
  children: PropTypes.string,
  /** Disables click functionality */
  disabled: PropTypes.bool,
  /** Standard DOM click event */
  onClick: PropTypes.func,
};

export const SecondaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.get('secondaryColor')};
  border-color: ${({ theme }) => theme.get('primaryColor')};
  color: ${({ theme }) => theme.get('primaryColor')};

  ${primaryStates}
`;

export const TertiaryButton = styled(Button)`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.get('primaryActiveColor')};
  height: auto;
  padding: 0;

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }

  &[disabled] {
    color: ${({ theme }) => theme.get('disabled')};
    cursor: not-allowed;
    text-decoration: none;
  }
`;

export const IconButton = styled(_PrimaryButton)`
  aspect-ratio: 1 / 1;
  height: auto;
  padding: 0;
  width: 1.6rem;
`;
