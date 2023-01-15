// react
import { useState } from 'react';

// custom components
import Button from './Button';

export default function Canvas() {
  const [state, setState] = useState([]);

  const addItem = (sequence) => {
    setState((prevState) => [
      ...prevState,
      {
        id: sequence,
        content: `${sequence}번째 아이템 입니다.`,
      },
    ]);
  };
  return (
    <div>
      <div className="button-section">
        <Button handleClick={addItem} />
      </div>

      <div className="item-section">
        {state.map(({ id, content }) => (
          <div key={`item_${id}`}>{content}</div>
        ))}
      </div>
    </div>
  );
}
