export const actions = {
    setName: "SET_NAME",
    setPokemons: "SET_POKEMONS",
    setPokemonInfo: "SET_POKEMON_INFO"
}

export const setName = name => ({
    type: actions.setName,
    payload: name
})

export const setPokemons = pokemon => ({
    type: actions.setPokemons,
    payload: pokemon
})