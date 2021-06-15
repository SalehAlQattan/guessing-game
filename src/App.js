// Styles
import { Container, GlobalStyle, ThemeTogglerButton } from './styles';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

// Creating the theme
const theme = {
  dark: {
    color: '#E4E6EB',
    backgroundColor: '#242526',
  },
  light: {
    color: '#242526',
    backgroundColor: '#E4E6EB',
  },
};

function App() {
  // Button state
  const [buttonText, setButtonText] = useState('Light');
  // Theme state
  const [currentTheme, setCurrentTheme] = useState('dark');

  const themeToggler = () => {
    currentTheme === 'dark'
      ? setCurrentTheme('light')
      : setCurrentTheme('dark');
  };

  // Change button text
  const buttonTextToggler = () => {
    buttonText === 'Dark' ? setButtonText('Light') : setButtonText('Dark');
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Container>
        <ThemeTogglerButton
          onClick={() => {
            themeToggler();
            buttonTextToggler();
          }}
        >
          {buttonText} Mode
        </ThemeTogglerButton>
        <h1>Hello Guessing Game</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
