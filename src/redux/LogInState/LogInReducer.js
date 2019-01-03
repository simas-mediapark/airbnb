import * as types from '../types'

const INITIAL_STATE = {
    loggedInState: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_LOGGED_IN_STATE:
            return { ...state, loggedInState: action.data }
        case 'CLEAR_USER_STATE':
            return { ...INITIAL_STATE }
        default:
            return state
    }
}
