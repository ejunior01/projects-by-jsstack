import React, { useContext } from 'react';
import { CustomThemeContext } from '../../context/CustomThemeProvider';
import { Container } from './styles';

export default function Footer() {
  const { theme, onToggleTheme } = useContext(CustomThemeContext);

  return (
    <Container>
      <span>JStack&apos;s Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={onToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
