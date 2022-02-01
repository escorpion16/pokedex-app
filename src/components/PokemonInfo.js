import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PokemonInfo({ url }) {

    const [pokeInfo, setPokeInfo] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setPokeInfo(res.data))
    },[url])

    console.log(pokeInfo)
    return (
        <div>
            <h2>{pokeInfo.forms[0]?.name}</h2>
            <img src={pokeInfo.sprites.front_default} alt={pokeInfo.forms[0]?.name} />
           
        </div>
    )
}

export default PokemonInfo
