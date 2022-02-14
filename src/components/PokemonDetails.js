import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "../components/styles/backgroundColor.css";
import "../components/styles/pokemonDetails.css"
import { setPokemonDetails } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

function PokemonDetails() {

    const { id } = useParams();
    const dispatch = useDispatch()

    const pokemonDetails = useSelector(state => state.pokemonDetails) 

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => dispatch(setPokemonDetails(res.data)))
    }, [id, dispatch])

    return (
        <div>
            {pokemonDetails &&
                <div id='pokemonInfo-wrapper' className={pokemonDetails.types[0]?.type.name === 'grass' ? 'grass' : 
                    pokemonDetails.types[0]?.type.name === 'fire' ? 'fire' :
                    pokemonDetails.types[0]?.type.name === 'water' ? 'water' :
                    pokemonDetails.types[0]?.type.name === 'bug' ? 'bug' :
                    pokemonDetails.types[0]?.type.name === 'normal' ? 'normal' :
                    pokemonDetails.types[0]?.type.name === 'poison' ? 'poison' :
                    pokemonDetails.types[0]?.type.name === 'electric' ? 'electric' :
                    pokemonDetails.types[0]?.type.name === 'fairy' ? 'fairy' :
                    pokemonDetails.types[0]?.type.name === 'fighting' ? 'fighting' :
                    pokemonDetails.types[0]?.type.name === 'rock' ? 'rock' :
                    pokemonDetails.types[0]?.type.name === 'ghost' ? 'ghost' :
                    pokemonDetails.types[0]?.type.name === 'psychic' ? 'psychic' :
                    pokemonDetails.types[0]?.type.name === 'ice' ? 'ice' :
                    pokemonDetails.types[0]?.type.name === 'dark' ? 'dark' :
                    pokemonDetails.types[0]?.type.name === 'flying' ? 'flying' :
                    pokemonDetails.types[0]?.type.name === 'dragon' ? 'dragon' : 'steel'
                    }>
                    <div className='pokemonInfo-logo-wrapper'>
                        <div className='pokemonInfo-logo'></div>
                        <div className='pokeball-background'></div>
                    </div>
                    <div className='pokemonInfo-container'>
                        <div className='pokemonInfo-details-wrapper'>
                            <div className='pokemonInfo-details'>
                                
                                <div className='pokemonInfo-image'>
                                    <img src={pokemonDetails.sprites?.other.dream_world.front_default} alt={pokemonDetails.name} />
                                </div>
                                <div className='pokemonInfo-weight-height'>
                                    <div><b>Weight: </b>{pokemonDetails.weight}</div>
                                    <div><b>Height: </b>{pokemonDetails.height}</div>
                                </div>
                                <div className='pokemonInfo-name'>{pokemonDetails.name}</div>
                                <div className='pokeInfo-id'># {id}</div>
                            </div>
                            <div className='pokemonInfo-types-abilities-wrapper'>
                                <div className='pokemonInfo-types-wrapper'>
                                        <h2>Type</h2>
                                        <div className='pokemonInfo-type-item'>
                                            { pokemonDetails.types.map(pokemonType => <div  key={pokemonType.type.name}>{ pokemonType.type.name }</div>) }
                                        </div>
                                </div>
                                <div className='pokemonInfo-abilities-wrapper'>
                                        <h2>Abilities</h2>
                                        <div className='pokemonInfo-abilities-item'>
                                            { pokemonDetails.abilities.map(pokemonAbilities => <div  key={pokemonAbilities.ability.name}>{ pokemonAbilities.ability.name }</div>) }
                                        </div>
                                </div>
                            </div>
                            <div className='pokeInfo-stats-wrapper'>
                                <h2 className='pokeInfo-title-stats'>Stats Base</h2>
                                <div className='pokeInfo-stats'>
                                    <h3 className='stat'>HP: </h3>
                                    <span className='bar'><span className='hp-stat' style={{width: `${pokemonDetails.stats[0].base_stat}%`} }></span></span>
                                    <h3>{pokemonDetails.stats[0].base_stat}/100</h3>
                                </div>
                                <div className='pokeInfo-stats'>
                                    <h3 className='stat'>Speed: </h3>
                                    <span className='bar'><span className='speed-stat' style={{width: `${pokemonDetails.stats[5].base_stat}%`}}></span></span>
                                    <h3>{pokemonDetails.stats[5].base_stat}/100</h3>
                                </div>
                                <div className='pokeInfo-stats'>
                                    <h3 className='stat'>Attack: </h3>
                                    <span className='bar'><span className='attack-stat' style={{width: `${pokemonDetails.stats[1].base_stat}%`}}></span></span>
                                    <h3>{pokemonDetails.stats[1].base_stat}/100</h3>
                                </div>
                                <div className='pokeInfo-stats'>
                                    <h3 className='stat'>Defense: </h3>
                                    <span className='bar'><span className='defense-stat' style={{width: `${pokemonDetails.stats[2].base_stat}%`}}></span></span>
                                    <h3>{pokemonDetails.stats[2].base_stat}/100</h3>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className='pokeInfo-sidebar'>
                            <h2>Movements</h2>
                            <div className='pokeInfo-movements'>
                                { pokemonDetails.moves.map(pokemonMove => <h3 key={pokemonMove.move.name}>{ pokemonMove.move.name}</h3>)}
                            </div>
                        </div>
                        
                    </div>
                
                </div>
            }

        </div>
        
    )
}

export default PokemonDetails
