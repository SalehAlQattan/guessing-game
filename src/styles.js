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
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  h1 {
    text-align: center;
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
