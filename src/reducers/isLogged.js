export const loggedReducer = (state = false,action) => {
    switch (action.type){
        case "SIGN_IT":
            return !state
        default:
            return state
    }
}

