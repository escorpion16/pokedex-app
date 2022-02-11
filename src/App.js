import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Pokedex from './components/Pokedex';
import ProtectedRoutes from './components/ProtectedRoutes';
import PokemonDetails from './components/PokemonDetails';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>

          <Route element={<ProtectedRoutes/>}>
            <Route className='pokemons-container' path="/pokedex" element={ <Pokedex/> } />
            <Route path="/pokedex/:id" element={ <PokemonDetails/> } />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
