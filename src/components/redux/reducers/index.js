import { actions } from "../actions";

const INITIAL_STATE = {
    name: "",
    pokemons: [],
    pokemonDetails: null
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actions.setName:
            return {
                ...state, name: action.payload 
            }
        case actions.setPokemons:
            const pokemon = action.payload
            return {
                ...state,
                pokemons: pokemon
            }
        case actions.setPokemonDetails:
            return {
                ...state,
                pokemonDetails: action.payload
            }
        default:
            return state
    }
}

export default reducer