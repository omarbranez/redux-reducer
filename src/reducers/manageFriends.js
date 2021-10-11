export function manageFriends(state = { friends: [] }, action){
    switch(action.type) {
        case "ADD_FRIEND":
            return Object.assign({}, state, {
                ...state, // we might add state keys later
                friends: [ ...state.friends, //the previous ones
                    action.friend ]// friend is keyvalue pairs
            })
        case "REMOVE_FRIEND":
            let notFriend = state.friends.findIndex(friend => friend.id === action.id) // find the friend in the array of friends
            return ( {...state, friends: [
                ...state.friends.slice(0, notFriend), //return everything before the friend
                ...state.friends.slice(notFriend + 1) //return everything after the friend
            ]})
        default: 
            return state
    }
}
