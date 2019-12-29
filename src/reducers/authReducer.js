//we import our constants here from our constants file
import { authConstants } from '../constants';
import { authActions } from '../actions';
//import { FETCH_CURRENT_USER } from '../actions';
//we add an initial state with an empty user here
const initialState = { user: null,response:{} }
export default function (state = initialState, action) {
    switch (action.type) {
        case authConstants.FETCH_CURRENT_USER:
            return { ...state, user: action.payload };

        case authConstants.REGISTER_SUCCESS:
            return { ...state, response: action.payload }

        case authConstants.REGISTER_FAILURE:
            return { ...state, error: action.payload }

        case authConstants.LOGIN_SUCCESS:
            return { ...state, response: action.payload, loggedIn: true }

        case authConstants.LOGIN_FAILURE:
            return { ...state, response: action.payload }

        case authConstants.CLEAR_RESPONSE:
            return { ...state, response: {} }

        case authConstants.LOGOUT:
            return {...state,response:{}}
            
        default:
            return state;
    }
}