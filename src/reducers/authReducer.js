//we import our constants here from our constants file
import { authConstants } from '../constants';
// import { FETCH_CURRENT_USER } from '../actions';
//we add an initial state with an empty user here
const initialState = {user:null}
export default function (state = initialState, action) {
    switch (action.type) {
        case authConstants.FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
}