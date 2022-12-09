import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import pokemonReducer2 from "./pokemonReducer2";
import directionReducer from "./directionReducer";
import pokemonHP from "./pokemonHP";
import pokemon2HP from "./pokemon2HP";
import damageReducer from "./damageReducer";
import damageReducer2 from "./damageReducer2";
import logReducer from "./logReducer";
import missReducer from "./missReducer";
import startPokemonHP from "./startPokemonHP";
import startPokemon2HP from "./startPokemon2HP";
import logsReducer from "./logsReducer";

export default combineReducers({
    pokemon: pokemonReducer,
    pokemon2: pokemonReducer2,
    direction: directionReducer,
    startPokemonHP: startPokemonHP,
    startPokemon2HP: startPokemon2HP,
    pokemonHP: pokemonHP,
    pokemon2HP: pokemon2HP,
    rightToleftDMG: damageReducer,
    leftTorightDMG: damageReducer2,
    logAdd: logReducer,
    miss: missReducer,
    logs: logsReducer
})