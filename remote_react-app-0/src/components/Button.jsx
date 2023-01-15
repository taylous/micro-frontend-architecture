// react
import { useState } from 'react';

export default function Button({ handleClick }) {
  const [state, setState] = useState(0);

  const onClick = () => {
    setState((prevState) => prevState + 1);
    handleClick(state);
  };
  return (
    <button type="button" onClick={onClick}>
      CLICK!!!
    </button>
  );
}
