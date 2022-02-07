import axios from 'axios'
import "../components/styles/pokemonInfo.css";
import React, { useEffect, useState } from 'react'

function PokemonInfo({ url, name }) {

    const [pokeInfo, setPokeInfo] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setPokeInfo(res.data))
    },[url])

    console.log(pokeInfo)
    return (
        <div className='pokemon-info'>
                    <h2>{name}</h2>
                    <img src={pokeInfo.sprites?.front_default} alt={name} />  
        </div>
    )
}

export default PokemonInfo
