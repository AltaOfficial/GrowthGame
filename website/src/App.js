import './App.css';
import Home from './Home'
import Gamepage from './Gamepage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Theme} from '@radix-ui/themes';

function App() {
  return (
    <Router>
      <Theme className='font-Montserrat' accentColor='gray' appearance='dark'>
        <main className='font-Montserrat'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/game' element={<Gamepage/>}/>
          </Routes>
        </main>
      </Theme>
    </Router>
  );
}

export default App;