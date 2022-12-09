export default (state = 0, action) => {
    switch(action.type){
        case "INITIAL_SET_RIGHT_HP" :
            return action.payload.toFixed(2)
        case "SET_NEW_RIGHT_HP" : {
            if((state - action.payload) < 0){
                return 0
            }
            else {
                return (state - action.payload).toFixed(2)
            }
        }
        default :
            return state
    }
}