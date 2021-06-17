// Styles
import { InputField, Label } from '../styles';
// Components
import Submit from './Submit';
// importing useStates
import { useState } from 'react';

const Input = () => {
  // Input State
  const [guessedNumber, setGuessedNumber] = useState(0);

  const handleChange = e => {
    setGuessedNumber(Number(e.target.value));
  };

  return (
    <>
      <Label>Enter Your Guess Below</Label>
      <InputField
        onChange={handleChange}
        type="number"
        max="10"
        min="0"
        placeholder="Max 10 & Min 0"
      />
      <Submit guessedNumber={guessedNumber} />
    </>
  );
};

export default Input;
