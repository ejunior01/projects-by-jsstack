import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '../styles/Theme';

export const CustomThemeContext = createContext({
  theme: 'dark',
  onToggleTheme: () => {},
});

export class CustomThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'dark',
    };
  }

  render() {
    const { theme } = this.state;

    return (
      <CustomThemeContext.Provider
        value={{
          theme,
          onToggleTheme: () => {
            this.setState((prevStat) => ({
              theme: prevStat.theme === 'dark' ? 'ligth' : 'dark',
            }));
          },
        }}
      >
        <ThemeProvider theme={themes[theme] || themes.dark}>
          {this.props.children}
        </ThemeProvider>
      </CustomThemeContext.Provider>
    );
  }
}
