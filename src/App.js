import Navbar from './components/Navbar';
import './index.css';
import { Router } from "@reach/router"
import Home from './components/Home'
import StudentList from './components/StudentList'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Home path='/' />
        <StudentList path='/students' />
      </Router>
    </div>
  );
}

export default App;
