import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    width: 70%;
    margin: 0 auto;
    font-size: 1.6rem;
  }
`;

export const Container = styled.div`
  height: 100vh;
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  h1 {
    text-align: center;
  }
  h2 {
    text-align: center;
    font-weight: bold;
  }
  h3 {
    text-align: center;
    font-weight: bold;
  }
`;

export const ThemeTogglerButton = styled.button`
  background: ${props => props.theme.color};
  color: ${props => props.theme.backgroundColor};
  font-size: 2rem;
  padding: 0.5rem;
  text-align: left;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  /* width: 100%; */
  /* height: 50vh; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-around; */
  margin: 0 auto;
  /* background: ${props => props.theme.color}; */
  color: ${props => props.theme.backgroundColor};
`;

export const InputField = styled.input`
  font-size: 1.6rem;
`;

export const SubmitButton = styled.button`
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  border-radius: 5px;
  display: block;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.6rem;
  cursor: pointer;
`;

export const Message = styled.div`
  /* width: 100%; */
  /* margin: 0 auto; */
  /* background: red; */
  h1 {
    color: ${props => props.theme.color};
  }
`;
