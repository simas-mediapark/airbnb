import * as types from '../types'
import { dispatch } from '../../../App'

export const setLoggedInState = (data) => dispatch({ type: types.SET_LOGGED_IN_STATE, data })

