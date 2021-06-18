// styles
import { ResetButton } from '../styles';

const Reset = ({ setMessage, setAttemps }) => {
  const handleClick = () => {
    setMessage('');
    setAttemps(4);
  };

  return <ResetButton onClick={handleClick}>Play Again</ResetButton>;
};

export default Reset;
