import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '../styles/Theme';

export const CustomThemeContext = createContext({
  theme: 'dark',
  onToggleTheme: () => {},
});

export function CustomThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    setTheme((prevStat) => (prevStat === 'dark' ? 'ligth' : 'dark'));
  }

  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme]);

  return (
    <CustomThemeContext.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme,
      }}
    >
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
