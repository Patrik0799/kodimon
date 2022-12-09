export default (state = null, action) => {
    switch(action.type){
        case "INITIAL_L_TO_R_DMG":
            return action.payload
        case "SET_NEW_RIGHT_HP":
            return action.payload
        default:
            return state
    }
}