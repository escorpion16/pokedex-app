import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../components/styles/pokedex.css";
import PokemonInfo from './PokemonInfo'
import { useSelector, useDispatch } from "react-redux";
import { setPokemons } from "./redux/actions";

function Pokedex() {
    const name = useSelector(state => state.name)
    const pokemons = useSelector( state => state.pokemons)
    const dispatch = useDispatch()


    // select pokemon type
    const [pokemonType, setPokemonType] = useState([])

    // Pagination
    const [page, setPage] = useState(1)
    const pokemonsPerPage = 9

    const lastIndex = page * pokemonsPerPage 
    const firstIndex = lastIndex - pokemonsPerPage

    const paginatedPokemons = pokemons.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil( pokemons.length / pokemonsPerPage)

    const pagesNumbers = []

    for(let i = 1; i <= totalPages; i++){
        pagesNumbers.push(i)
    }

    // the end Pagination code

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => dispatch(setPokemons(res.data.results)))
    },[dispatch])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setPokemonType(res.data.results))
    },[])

    const types = url => {
        
        console.log(url)
        axios.get(url)
        .then(res => dispatch(setPokemons(res.data.pokemon)))
       
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <h2>Welcome {name}, here you can find your favourite pokemon!</h2>

            <div className='select-type'>
                <select onChange={e => types(e.target.value)}>
                    {pokemonType.map(type => (
                        <option key={type.url} value={type.url}>{type.name}</option>
                    ))}
                </select>
            </div>
            
            <div className='pokemon-container'>
                {
                    paginatedPokemons.map(pokemon => 
                        <li key={pokemon.url ? pokemon.url : pokemon.pokemon.url} className='pokemon-card'>
                            <PokemonInfo url={pokemon.url ? pokemon.url : pokemon.pokemon.url} name={pokemon.name} />
                        </li>
                    )
                }
            </div>
            <div className='pagination-wrapper'>
                { page !== 1 && (<button onClick={() => setPage(page - 1)}><i className="bi bi-arrow-left"></i></button>)}
                { pagesNumbers.map(number => <button key={number} onClick={() => setPage(number)}>{number}</button>)}
                { page !== totalPages && (<button onClick={() => setPage(page + 1)}><i className="bi bi-arrow-right"></i></button>)}
            </div>
        </div>
        
    )
}

export default Pokedex
