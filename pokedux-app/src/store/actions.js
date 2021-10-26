export const CLICK = 'CLICK'
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const FETCH_POKEMON_PENDING = 'FETCH_POKEMON_PENDING'
export const SHOW_POKEMON = 'SHOW_POKEMON'
export const CATCH_POKEMON = 'CATCH_POKEMON'

export function fecthPokemonSuccess(pokemons) {
    return {
        type: FETCH_POKEMON_SUCCESS,
        pokemons
    }
}
export function fetchPokemonPending() {
    return {
        type : FETCH_POKEMON_PENDING
    }
}
export function showPokemonAction(pokemons) {
    const availablePokemons = pokemons.filter(pokemon => !pokemon.isCatch)

    const random = Math.floor(Math.random() * availablePokemons.length)
    const onScreen = availablePokemons[random]

    return dispatch => {
        dispatch({ type : SHOW_POKEMON, onScreen })
    }
}

export function catchPokemonAction() {
    // la variable catch se situe entre 1 et 255
    const random = Math.floor(Math.random() * 255)

    return dispatch => {
        dispatch({ type: CATCH_POKEMON, random })
    }
}