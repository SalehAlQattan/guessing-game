// Styles
import { SubmitButton, Message } from '../styles';
// importing useState
import { useState } from 'react';
// components
import Reset from './Reset';

const Submit = ({ guessedNumber }) => {
  // Number of Attemps State
  const [attemps, setAttemps] = useState(4);
  // Message State
  const [message, setMessage] = useState('');
  // Random Number State
  const max = 10; /* set max number here */
  const min = 0; /* set min number here */
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * (max - min + 1) + min)
  );
  // Handling Click Funcion
  const handleClick = () => {
    console.log(`this is attempts ${attemps}`);
    // checking if the guessed number is Higher than random numbre
    if (guessedNumber > randomNumber) {
      setMessage(
        `Number ${guessedNumber} is Greater than the secret Number, Try Again, you still have ${attemps} attempts`
      );
      setAttemps(attemps - 1);
      // checking if the guessed number is Less than random numbre
    } else if (guessedNumber < randomNumber) {
      setMessage(
        `Number ${guessedNumber} is Less than the secret Number, Try Again, you still have ${attemps} attempts`
      );
      setAttemps(attemps - 1);
      // checking if the guessed number is higher than random numbre
    } else if (guessedNumber === randomNumber) {
      setMessage(`Correct The Secret Number is ${guessedNumber}`);
      setRandomNumber(Math.floor(Math.random() * (max - min + 1) + min));
      setAttemps(4);
    }
    //
    if (attemps === 0) {
      setMessage(`You Lose, The Secret Number is ${randomNumber}, Try Again`);
      setRandomNumber(Math.floor(Math.random() * (max - min + 1) + min));
      setAttemps(4);
    }
    console.log(`this is random ${randomNumber}`);
  };

  return (
    <>
      <SubmitButton onClick={handleClick}>Submit</SubmitButton>
      <Message>
        <h1>{message}</h1>
      </Message>
      <Reset setAttemps={setAttemps} setMessage={setMessage} />
    </>
  );
};

export default Submit;
