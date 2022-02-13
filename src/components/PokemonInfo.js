import axios from 'axios'
import "../components/styles/pokemonInfo.css";
import "../components/styles/backgroundColor.css";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function PokemonInfo({ url, name }) {

    const [pokemonInfo, setPokemonInfo] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemonInfo(res.data))
    },[url])

    return (
        <div className='pokemon-wrapper'>
                {pokemonInfo && 
                <Link to={`/pokedex/${pokemonInfo.id}`}>
                    <div id='border-card' className={pokemonInfo.types[0]?.type.name === 'grass' ? 'grass' : 
                                    pokemonInfo.types[0]?.type.name === 'fire' ? 'fire' :
                                    pokemonInfo.types[0]?.type.name === 'water' ? 'water' :
                                    pokemonInfo.types[0]?.type.name === 'bug' ? 'bug' :
                                    pokemonInfo.types[0]?.type.name === 'normal' ? 'normal' :
                                    pokemonInfo.types[0]?.type.name === 'poison' ? 'poison' :
                                    pokemonInfo.types[0]?.type.name === 'electric' ? 'electric' :
                                    pokemonInfo.types[0]?.type.name === 'fairy' ? 'fairy' :
                                    pokemonInfo.types[0]?.type.name === 'fighting' ? 'fighting' :
                                    pokemonInfo.types[0]?.type.name === 'rock' ? 'rock' :
                                    pokemonInfo.types[0]?.type.name === 'ghost' ? 'ghost' :
                                    pokemonInfo.types[0]?.type.name === 'psychic' ? 'psychic' :
                                    pokemonInfo.types[0]?.type.name === 'ice' ? 'ice' :
                                    pokemonInfo.types[0]?.type.name === 'dark' ? 'dark' :
                                    pokemonInfo.types[0]?.type.name === 'flying' ? 'flying' :
                                    pokemonInfo.types[0]?.type.name === 'dragon' ? 'dragon' : 'steel'
                }>
                        
                        <div className='pokemon-details'>
                            <h3 className='pokemon-name'><b> {name} </b></h3>
                            
                                <div className='details-wrap'>
                                    <div className='pokemon-information'>
                                        <div><b>Type: </b>{pokemonInfo.types[0]?.type.name},{pokemonInfo.types[1]?.type.name} </div>
                                        <div><b>hp: </b>{pokemonInfo.stats[0]?.base_stat}</div>
                                        <div><b>attack: </b>{pokemonInfo.stats[1]?.base_stat}</div>
                                        <div><b>defense: </b>{pokemonInfo.stats[2]?.base_stat}</div>
                                        <div><b>speed: </b>{pokemonInfo.stats[5]?.base_stat}</div>
                                    </div>
                                    <div className='pokemon-image'>
                                    </div>
                                </div>
                            <img src={pokemonInfo.sprites?.other.dream_world.front_default} alt={name} className="pokemon-sprite"/>
                            <div className='pokemon-ball'></div>  
                        </div>
                        
                    </div>
                </Link>
                }
           
        </div>

    )
}

export default PokemonInfo
