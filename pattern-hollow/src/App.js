import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
