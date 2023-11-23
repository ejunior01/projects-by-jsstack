import React, { useContext } from 'react';
import { CustomThemeContext } from '../../context/CustomThemeProvider';

import { Container } from './styles';

export default function Header() {
  const { theme, onToggleTheme } = useContext(CustomThemeContext);
  return (
    <Container>
      <h1>JStack&apos;s Blog</h1>
      <button type="button" onClick={onToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
