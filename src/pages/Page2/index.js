
//import Board from './components/Board';
//import Info from './components/Info'
import "./app.css"
import "./index1.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Humanmode } from './components/Humanmode';

export function PageTwo() {

  const [mode, setMode] = useState(null)
  
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
