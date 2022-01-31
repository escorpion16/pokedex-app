import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import NameForm from './components/NameForm';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<NameForm/>}/>
          <Route path="/pokedex" element={<Pokedex/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
