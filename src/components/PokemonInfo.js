import axios from 'axios'
import "../components/styles/pokemonInfo.css";
import "../components/styles/backgroundColor.css";
import React, { useEffect, useState } from 'react'

function PokemonInfo({ url, name }) {

    const [pokeInfo, setPokeInfo] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(res => setPokeInfo(res.data))
    },[url])

    return (
        <div>
            {pokeInfo && 
            <div className={pokeInfo.types[0]?.type.name === 'grass' ? 'grass' : 
                            pokeInfo.types[0]?.type.name === 'fire' ? 'fire' :
                            pokeInfo.types[0]?.type.name === 'water' ? 'water' :
                            pokeInfo.types[0]?.type.name === 'bug' ? 'bug' :
                            pokeInfo.types[0]?.type.name === 'normal' ? 'normal' :
                            pokeInfo.types[0]?.type.name === 'poison' ? 'poison' :
                            pokeInfo.types[0]?.type.name === 'electric' ? 'electric' :
                            pokeInfo.types[0]?.type.name === 'fairy' ? 'fairy' :
                            pokeInfo.types[0]?.type.name === 'fighting' ? 'fighting' :
                            pokeInfo.types[0]?.type.name === 'rock' ? 'rock' :
                            pokeInfo.types[0]?.type.name === 'ghost' ? 'ghost' :
                            pokeInfo.types[0]?.type.name === 'psychic' ? 'psychic' :
                            pokeInfo.types[0]?.type.name === 'ice' ? 'ice' :
                            pokeInfo.types[0]?.type.name === 'dark' ? 'dark' :
                            pokeInfo.types[0]?.type.name === 'flying' ? 'flying' :
                            pokeInfo.types[0]?.type.name === 'dragon' ? 'dragon' : 'steel'
                            }>
                
                <div className='pokemon-details'>
                    <h3 className='pokemon-name'><b> {name} </b></h3>
                    
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
                                <div className='pokemon-ball'></div>  
                            </div>
                        </div>
                        
                </div>
                
            </div>
            }
        </div>

    )
}

export default PokemonInfo
