import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/pokedex" element={<Pokedex/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
