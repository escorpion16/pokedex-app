export const actions = {
    setName: "SET_NAME",
    setPokemons: "SET_POKEMONS",
    setPokemonDetails: "SET_POKEMON_DETAILS"
}

export const setName = name => ({
    type: actions.setName,
    payload: name
})

export const setPokemons = pokemon => ({
    type: actions.setPokemons,
    payload: pokemon
})

export const setPokemonDetails = pokemonDetails => ({
    type: actions.setPokemonDetails,
    payload: pokemonDetails
})