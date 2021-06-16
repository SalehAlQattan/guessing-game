// Styles
import { Container, GlobalStyle, ThemeTogglerButton } from './styles';
import { ThemeProvider } from 'styled-components';
import { InputContainer } from './styles';
// importing useState
import { useState } from 'react';
// Importing Components
import Input from './components/Input';
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
  /***************************************************************/
  // All States!
  // Button state
  const [buttonText, setButtonText] = useState('Light');
  // Theme state
  const [currentTheme, setCurrentTheme] = useState('dark');

  /***************************************************************/

  // Toggle The Theme
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
      <ThemeTogglerButton
        onClick={() => {
          themeToggler();
          buttonTextToggler();
        }}
      >
        {buttonText} Mode
      </ThemeTogglerButton>
      <Container>
        <h1>Welcome To The Guessing Game</h1>
        <h2>You Have Only 5 Attemps!</h2>
        <h3>Guess a Number Between 0 & 10!</h3>
        <InputContainer>
          <Input />
        </InputContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
