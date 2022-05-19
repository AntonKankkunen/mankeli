
import AiBoard from './AiBoard';
import Info from './Info'
import "../app.css"
import "../index1.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function AIMode() {
  const [reset, setReset] = useState(false)
  const [winner, setWinner] = useState('');

  const resetBoard = () => {
      setReset(true);
  }

  return (
    <div className="App1">
        <div className={`winner ${winner ? '' : 'shrink'}`}>
            <div className='winner-text'>{winner}</div>
            <button onClick={() => resetBoard()}>
                Reset Board
            </button>
        </div>
        <AiBoard reset={reset} setReset={setReset} winner={winner} setWinner={setWinner} />
        <Info />
    </div>
  );
}
