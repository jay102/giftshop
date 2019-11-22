import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import productReducer from './productReducer';

export default  combineReducers({
    cart: cartReducer,
    auth:authReducer,
    product: productReducer
})