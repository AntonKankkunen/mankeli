import logo from '../../logo.svg';
import './style.css';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        mankeli
      </header>

      <div className="App-line"></div>
      
      <main className="App-main">
        <p>
          Page 1
        </p>

        <Link to="/page2" className="App-link">
          Next Page
        </Link>
      </main>
    </div>
  );
}
