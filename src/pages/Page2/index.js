
//import Board from './components/Board';
//import Info from './components/Info'
import "./app.css"
import "./index1.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Humanmode } from './components/Humanmode';

export function PageTwo() {

  // Creating a reset state, which indicates whether 
  // the game should be reset or not
  const [reset, setReset] = useState(false)

  // Creating a winner state, which indicates
  // the current winner
  const [winner, setWinner] = useState('');

  const [mode, setMode] = useState(null)

  // Sets the reset property to true
  // which starts the chain 
  // reaction of resetting the board
  const resetBoard = () => {
      setReset(true);
  }


  return (
    
    <div className="App1">
            <Humanmode/>
            
        <p>
          Page 2
        </p>
        <Link to="/" className="App-link">
          Previous Page
        </Link>
      
        </div>
  );
}
