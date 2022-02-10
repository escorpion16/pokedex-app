import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../components/styles/pokedex.css";
import PokemonInfo from './PokemonInfo'
import { useSelector } from "react-redux";

function Pokedex() {
    const name = useSelector(state => state.name)

    const [pokemons, setPokemons] = useState([])


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => setPokemons(res.data.results))
    },[])

    return (
        <div>
            <h1>Pokedex</h1>
            <h2>Welcome {name}, here you can find your favourite pokemon!</h2>
            
            <div className='pokemon-container'>

            
            {
                pokemons.map(pokemon => 
                    <li key={pokemon.url} className='pokemon-card'>
                        <PokemonInfo url={pokemon.url} name={pokemon.name} />
                    </li>
                )
            }

            </div>
        </div>
        
    )
}

export default Pokedex
