import pokeAPI from "../apis/pokeAPI";

export const fetchPokemon1 = (pokeID) =>  async (dispatch) => {
    try {
        const {data} = await pokeAPI.get(`/pokemon/${pokeID}`);
        dispatch({
            type: "FETCH_POKEMON_1", 
            payload: data
        })
    } catch(error) {
        console.log(error);
    }
            
}
export const fetchPokemon2 = (pokeID) => async (dispatch) => {

    try {
        const {data} = await pokeAPI.get(`/pokemon/${pokeID}`);
        dispatch({
            type: "FETCH_POKEMON_2", 
            payload: data
        })
    } catch(error) {
        console.log(error);
    }
       
}
export const setToLeftPokemon = () => {
    return {
        type: "SET_LEFT"
    }
}
export const setToRightPokemon = () => {
    return{
        type: "SET_RIGHT"
    }
}
export const initialSetLeftPokemonHP = (initialHP) => {
    return{
        type: "INITIAL_SET_LEFT_HP",
        payload: initialHP
    }
}
export const newSetLeftPokemonHP = (dmg) => {
    return{
        type: "SET_NEW_LEFT_HP",
        payload: dmg
    }
}
export const initialSetRightPokemonHP = (initialHP) => {
    return{
        type: "INITIAL_SET_RIGHT_HP",
        payload: initialHP
    }
}
export const newSetRightPokemonHP = (dmg) => {
    return {
        type: "SET_NEW_RIGHT_HP",
        payload: dmg
    }
}
export const logTo1 = (num) =>{
    return{
        type: "LOG_INC",
        payload: num
    }
}
export const logTo2 = (num) =>{
    return{
        type: "LOG_DEC",
        payload: num
    }
}
export const initialRightToLeftDMG = (dmg) => {
    return{
        type: "INITIAL_R_TO_L_DMG",
        payload: dmg
    }
}
export const initialLeftToRightDMG = (dmg) => {
    return {
        type: "INITIAL_L_TO_R_DMG",
        payload: dmg
    }
}
export const setMissed = (value) =>{
    return{
        type: "SET_MISS",
        payload: value
    }
}
export const setFakeLogs = (log) => {
    return{
        type: "ADD_TO_LOGS",
        payload: log
    }
}


