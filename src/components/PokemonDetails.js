import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../components/styles/backgroundColor.css";
import "../components/styles/pokemonDetails.css"

function PokemonDetails() {

    const { id } = useParams()

    const [pokemon, setPokemon] =  useState(null)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [id])


    return (
        <div>
            {pokemon &&
                <div id='pokemonInfo-wrapper' className={pokemon.types[0]?.type.name === 'grass' ? 'grass' : 
                    pokemon.types[0]?.type.name === 'fire' ? 'fire' :
                    pokemon.types[0]?.type.name === 'water' ? 'water' :
                    pokemon.types[0]?.type.name === 'bug' ? 'bug' :
                    pokemon.types[0]?.type.name === 'normal' ? 'normal' :
                    pokemon.types[0]?.type.name === 'poison' ? 'poison' :
                    pokemon.types[0]?.type.name === 'electric' ? 'electric' :
                    pokemon.types[0]?.type.name === 'fairy' ? 'fairy' :
                    pokemon.types[0]?.type.name === 'fighting' ? 'fighting' :
                    pokemon.types[0]?.type.name === 'rock' ? 'rock' :
                    pokemon.types[0]?.type.name === 'ghost' ? 'ghost' :
                    pokemon.types[0]?.type.name === 'psychic' ? 'psychic' :
                    pokemon.types[0]?.type.name === 'ice' ? 'ice' :
                    pokemon.types[0]?.type.name === 'dark' ? 'dark' :
                    pokemon.types[0]?.type.name === 'flying' ? 'flying' :
                    pokemon.types[0]?.type.name === 'dragon' ? 'dragon' : 'steel'
                    }>
                    <div className='pokemonInfo-logo-wrapper'>

                        <div className='pokemonInfo-logo'></div>
                    </div>
                    <div className='pokemonInfo-container'>
                        <div className='pokemonInfo-details-wrapper'>
                            <div className='pokemonInfo-details'>
                                
                                <div className='pokemonInfo-image'>
                                    <img src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
                                </div>
                                <div className='pokemonInfo-weight-height'>
                                    <div><b>Weight: </b>{pokemon.weight}</div>
                                    <div><b>Height: </b>{pokemon.height}</div>
                                </div>
                                <div className='pokemonInfo-name'>{pokemon.name}</div>
                                <div className='pokeInfo-id'># {id}</div>
                            </div>
                            <div className='pokemonInfo-types-abilities-wrapper'>
                                <div className='pokemonInfo-types-wrapper'>
                                        <h2>Type</h2>
                                        <div className='pokemonInfo-type-item'>
                                            { pokemon.types.map(pokemonType => <div  key={pokemonType.type.name}>{ pokemonType.type.name }</div>) }
                                        </div>
                                </div>
                                <div className='pokemonInfo-abilities-wrapper'>
                                        <h2>Abilities</h2>
                                        <div className='pokemonInfo-abilities-item'>
                                            { pokemon.abilities.map(pokemonAbilities => <div  key={pokemonAbilities.ability.name}>{ pokemonAbilities.ability.name }</div>) }
                                        </div>
                                </div>
                            </div>
                            <div className='pokeInfo-stats-wrapper'>
                                <h2 className='pokeInfo-title-stats'>Stats Base</h2>
                                <div className='pokeInfo-stats'>
                                    <div>HP: </div>
                                    <div>{pokemon.stats[0].base_stat}</div>
                                </div>
                                <div className='pokeInfo-stats'>
                                    <div>Speed: </div>
                                    <div className='progress-bar blue'><span></span>{pokemon.stats[5].base_stat}</div>
                                </div>
                                <div className='pokeInfo-stats'>
                                    <div>Attack: </div>
                                    <div>{pokemon.stats[1].base_stat}</div>
                                </div>
                                <div className='pokeInfo-stats'>
                                    <div>Defense: </div>
                                    <div>{pokemon.stats[2].base_stat}</div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className='pokeInfo-sidebar'>
                            <button className='pokeInfo-encounters-btn'>Encounters</button>
                            <div className='pokeInfo-movements'>
                                { pokemon.moves.map(pokemonMove => <h3 key={pokemonMove.move.name}>{ pokemonMove.move.name}</h3>)}
                            </div>
                        </div>
                        
                    </div>
                
                </div>
            }

        </div>
        
    )
}

export default PokemonDetails
