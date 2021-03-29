import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './utils/global-styles';
import { defaultTheme, alternateTheme } from './utils/themes';
import store from './store';
import InboxScreen from './screens/inbox-screen';

/* eslint-disable react/prop-types */
const Theme = ({ children }) => {
  const [alternateThemeEnabled] = useState(false);

  return (
    <ThemeProvider
      theme={alternateThemeEnabled ? alternateTheme : defaultTheme}
    >
      {children}
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <Theme>
        <InboxScreen />
      </Theme>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
