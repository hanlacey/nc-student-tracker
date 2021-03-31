import Navbar from './components/Navbar';
import './index.css';
import { Router } from "@reach/router"
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Home path='/' />
      </Router>
    </div>
  );
}

export default App;
