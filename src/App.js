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
    color: '#A8DADC',
    backgroundColor: '#1D3557',
  },
  light: {
    color: '#1D3557',
    backgroundColor: '#A8DADC',
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
        <h1>You Have Only 5 Attempts!</h1>
        <h1>Guess a Number Between 0 & 10!</h1>
        <InputContainer>
          <Input />
        </InputContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
