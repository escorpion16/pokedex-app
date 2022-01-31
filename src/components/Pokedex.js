import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonInfo from './PokemonInfo'

function Pokedex() {


    const [pokemons, setPokemons] = useState([])


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => setPokemons(res.data.results))
    },[])
    return (
        <div>
            {
                pokemons.map(pokemon => 
                    <li key={pokemon.url}>
                        <PokemonInfo url={pokemon.url} />
                    </li>
                )
            }
            
        </div>
    )
}

export default Pokedex
