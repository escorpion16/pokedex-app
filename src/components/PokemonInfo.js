import axios from 'axios'
import "../components/styles/pokemonInfo.css";
import React, { useEffect, useState } from 'react'

function PokemonInfo({ url, name }) {

    const [pokeInfo, setPokeInfo] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(res => setPokeInfo(res.data))
    },[url])

    return (
        <div className='pokemon-details'>
            <h3 className='pokemon-name'><b> {name} </b></h3>
            {pokeInfo && 
            <div className='details-wrap'>
                <div className='pokemon-information'>
                    <div><b>Type: </b>{pokeInfo.types[0]?.type.name},{pokeInfo.types[1]?.type.name} </div>
                    <div><b>hp: </b>{pokeInfo.stats[0]?.base_stat}</div>
                    <div><b>attack: </b>{pokeInfo.stats[1]?.base_stat}</div>
                    <div><b>defense: </b>{pokeInfo.stats[2]?.base_stat}</div>
                    <div><b>speed: </b>{pokeInfo.stats[5]?.base_stat}</div>
                </div>
                <div className='pokemon-image'>
                    <img src={pokeInfo.sprites?.other.dream_world.front_default} alt={name} />  
                </div>
            </div>
            }     
        </div>
    )
}

export default PokemonInfo
