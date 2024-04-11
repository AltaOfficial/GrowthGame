import './App.css';
import Home from './Home'
import Gamepage from './Gamepage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Theme } from '@radix-ui/themes';
import { appearance } from './Utilities';

function App() {

  return (
    <Router>
      <Theme accentColor='gray' appearance={appearance}>
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