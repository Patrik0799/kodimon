export default (state = [], action) =>{
    switch(action.type){
        case "ADD_TO_LOGS":
            return action.payload;
        default:
            return state
    }
}