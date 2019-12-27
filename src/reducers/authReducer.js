//we import our constants here from our constants file
import { authConstants } from '../constants';
import { authActions } from '../actions';
//import { FETCH_CURRENT_USER } from '../actions';
//we add an initial state with an empty user here
const initialState = { user: null }
export default function (state = initialState, action) {
    switch (action.type) {
        case authConstants.FETCH_CURRENT_USER:
            return {...state, user: action.payload} ;
           
        case authConstants.REGISTER_SUCCESS:
            return {...state, response : action.payload} 

            case authConstants.LOGIN_SUCCESS:
                return {...state, response:action.payload}
        default:
            return state;
    }
}