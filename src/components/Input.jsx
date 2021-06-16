// Styles
import { InputField } from '../styles';
// Components
import Button from './Button';
// importing useStates
import { useState } from 'react';

const Input = ({ attemps, setAttemps }) => {
  const [guessedNumber, setGuessedNumber] = useState(0);

  const handleChange = e => {
    setGuessedNumber(Number(e.target.value));
  };

  return (
    <>
      <InputField
        onChange={handleChange}
        max="10"
        min="0"
        placeholder="Max 10 & Min 0"
      />
      <Button
        setAttemps={setAttemps}
        attemps={attemps}
        guessedNumber={guessedNumber}
      />
    </>
  );
};

export default Input;
