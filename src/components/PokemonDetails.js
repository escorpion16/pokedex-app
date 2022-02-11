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
                    <div className='pokemonInfo-details-container'>
                        <div className='pokemonInfo-details'>
                            <h2>POKEMON</h2>
                            <div className='pokemonInfo-image'>
                                <img src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
                            </div>
                            <div>{pokemon.name}</div>
                            <div>Weight: {pokemon.weight}</div>
                            <div>Height: {pokemon.height}</div>
                            <div>#{id}</div>

                            <div className='pokemonInfo-types'>
                                <h2>Type</h2>
                                <div>
                                    { pokemon.types.map(pokemonType => <div className='pokemonInfo-type'>{ pokemonType.type.name }</div>) }
                                </div>
                            </div>
                        </div>
                        <div className='pokemonInfo-movements'>
                            { pokemon.moves.map(pokemonMove => <h3 key={pokemonMove.move.name}>{ pokemonMove.move.name}</h3>)}
                        </div>
                    </div>
                
                </div>
            }

        </div>
        
    )
}

export default PokemonDetails
