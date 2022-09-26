import logo from './logo.svg';
import React from 'react';
import './App.css';
import Peoplelist from './Peoplelist';
import Details from './details';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/people' element={<Peoplelist />} />
          <Route path='/details/:name:id' element={<Details/>} />
        

        </Routes>
      </Router>

    </div>
  );
}

export default App;
