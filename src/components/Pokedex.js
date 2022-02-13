import axios from 'axios'
import React, { useEffect } from 'react'
import "../components/styles/pokedex.css";
import PokemonInfo from './PokemonInfo'
import { useSelector, useDispatch } from "react-redux";
import { setPokemons } from "./redux/actions";

function Pokedex() {
    const name = useSelector(state => state.name)

    
    const pokemons = useSelector( state => state.pokemons)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => dispatch(setPokemons(res.data.results)))
    },[dispatch])

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
