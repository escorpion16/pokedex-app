import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PokemonDetails() {

    const { id } = useParams()

    const [pokemon, setPokemon] =  useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [id])

    return (
        <div>
            <h2>POKEMON</h2>
            <div>{pokemon.name}</div>
        </div>
    )
}

export default PokemonDetails
