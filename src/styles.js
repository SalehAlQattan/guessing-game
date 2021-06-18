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
    background: ${({ theme }) => theme.backgroundColor};
  }
`;

export const Container = styled.div`
  color: ${({ theme }) => theme.color};
  h1 {
    text-align: center;
  }
`;

export const ThemeTogglerButton = styled.button`
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.backgroundColor};
  font-size: 2rem;
  padding: 0.5rem;
  text-align: left;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  color: ${({ theme }) => theme.backgroundColor};
  background: ${({ theme }) => theme.color};
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
`;

export const Label = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

export const InputField = styled.input`
  font-size: 2rem;
  width: 50%;
  padding: 1rem;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  padding: 0.5rem;
  width: 53%;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2rem;
  cursor: pointer;
  letter-spacing: 4px;
`;

export const ResetButton = styled.button`
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  padding: 0.5rem;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2rem;
  cursor: pointer;
  letter-spacing: 4px;
`;

export const Message = styled.div`
  h1 {
    color: ${({ theme }) => theme.backgroundColor};
    width: 60%;
    margin: 0 auto;
  }
`;
