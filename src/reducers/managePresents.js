export function managePresents(state = { numberOfPresents: 0}, action){
    // let state = {
    //     numberOfPresents: 0
    // }
    switch(action.type) {
        case "INCREASE": 
            return Object.assign({}, state, {
                numberOfPresents: state.numberOfPresents + 1
            })
        default: 
            return state
    }
}
