import './App.css';
import Navbar from './components/Navbar';
import Home from './Home'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game' element={<Gamepage/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;