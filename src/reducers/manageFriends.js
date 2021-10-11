export function manageFriends(state = { friends: [] }, action){
    switch(action.type) {
        case "ADD_FRIEND":
            return Object.assign({}, state, {
                ...state, // we might add state keys later
                friends: [ ...state.friends, //the previous ones
                    action.friend ]// friend is keyvalue pairs
            })
        case "REMOVE_FRIEND":
            let notFriend = state.friends.findIndex(friend => friend.id === action.id)
            return ( {...state, friends: [
                ...state.friends.slice(0, notFriend),
                ...state.friends.slice(notFriend + 1)
            ]})
        default: 
            return state
    }
}
