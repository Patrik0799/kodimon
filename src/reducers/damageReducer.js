export default (state = null, action) => {
    switch(action.type){
        case "INITIAL_R_TO_L_DMG":
            return action.payload
        case "SET_NEW_LEFT_HP":
            return action.payload
        default:
            return state
    }
}