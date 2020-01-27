import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer';

export default  combineReducers({
    cart: cartReducer,
    auth:authReducer,
    product: productsReducer, 
    category: categoryReducer
})