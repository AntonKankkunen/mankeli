import "./app.css"
import "./index1.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Humanmode } from './components/Humanmode';
import { AIMode } from "./components/AImode";

export function PageTwo() {
  const [mode, setMode] = useState(true);

  const contents = mode ? <Humanmode/> : <AIMode/>

  const handleModeClick = () => {
    setMode(!mode);
  }

  return (
    <div className="App1">
      <h2>{mode ? "PVP" : "Against AI"}</h2>
      {contents}
      <div>
        <button className="button" onClick={handleModeClick}>Play against AI</button>
      </div>
      <p>
        Page 2
      </p>
      <Link to="/" className="App-link">
        Previous Page
      </Link>
    </div>
  );
}