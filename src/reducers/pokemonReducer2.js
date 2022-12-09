export default (state = [], action) => {
    switch(action.type){
        case "FETCH_POKEMON_2":
            return action.payload;
        default:
            return state;
    }
}