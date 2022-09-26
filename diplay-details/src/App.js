import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Nextpage from './Nextpage';
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element ={ <Table/>}/>
        <Route exact path="/nextpage/:id" element ={ <Nextpage/>}/>
     </Routes>
    </Router>
   
    
  );
}

export default App;
