import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/utils/global-styles';
import { defaultTheme, alternateTheme } from '../src/utils/themes';

export const parameters = {
  actions: {
    argTypesRegex: '^(on|set)[A-Z].*',
  },
  backgrounds: {
    default: 'light',
  },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      motoG4: {
        name: 'Moto G4',
        styles: {
          width: '360px',
          height: '640px',
        },
      },
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Change the theme for components using styled-components',
    defaultValue: 'DEFAULT',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'DEFAULT', title: 'Default Theme' },
        { value: 'ALTERNATE', title: 'Alternate Theme' },
      ],
    },
  },
};

const withGlobalStyles = (Story) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Story />
    </React.Fragment>
  );
};

const withThemeProvider = (Story, context) => {
  const themeSettings =
    context.globals.theme === 'DEFAULT' ? defaultTheme : alternateTheme;

  return (
    <ThemeProvider theme={themeSettings}>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withGlobalStyles, withThemeProvider];
