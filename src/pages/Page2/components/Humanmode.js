
import Board from '../components/Board';
import Info from '../components/Info'
import "../app.css"
import "../index1.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Humanmode() {

  // Creating a reset state, which indicates whether 
  // the game should be reset or not
  const [reset, setReset] = useState(false)

  // Creating a winner state, which indicates
  // the current winner
  const [winner, setWinner] = useState('');

  const [mode, setMode] = useState(false)

  // Sets the reset property to true
  // which starts the chain 
  // reaction of resetting the board
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
            {/* Custom made board component comprising of 
            the tic-tac-toe board  */}
            <Board reset={reset} setReset={setReset} winner={winner} setWinner={setWinner} />
            <Info />
            
        </div>
  );
}
