export default (state = [], action) => {
    switch(action.type){
        case "INITIAL_SET_RIGHT_HP":
            return action.payload
        default:
            return state
    }
}