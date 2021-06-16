// Styles
import { SubmitButton, Message } from '../styles';
// importing useState
import { useState } from 'react';

const Button = ({ guessedNumber }) => {
  // Number of Attemps State
  const [attemps, setAttemps] = useState(4);
  // Message State
  const [message, setMessage] = useState('');
  // Random Number State
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * (10 - 0 + 1) + 0)
  );
  // Handling Click Funcion
  const handleClick = () => {
    if (guessedNumber > randomNumber) {
      setMessage(`${guessedNumber} Number is Higher, Try Agin`);
      setAttemps(attemps - 1);
    } else if (guessedNumber < randomNumber) {
      setMessage(`${guessedNumber} Number is Lower, Try Agin`);
      setAttemps(attemps - 1);
    } else if (guessedNumber === randomNumber) {
      setMessage(`Correct The Secret Number is ${guessedNumber}`);
      setRandomNumber(Math.floor(Math.random() * (10 - 0) + 1));
      setAttemps(5);
    }

    if (attemps === 0) {
      setMessage(`You Lose, The Secret Number is ${randomNumber}, Try Again`);
      setRandomNumber(Math.floor(Math.random() * (10 - 0) + 1));
      setAttemps(5);
    }

    console.log(randomNumber);
  };

  return (
    <>
      <SubmitButton onClick={handleClick}>Submit</SubmitButton>
      <Message>
        <h1>{message}</h1>
      </Message>
    </>
  );
};

export default Button;
