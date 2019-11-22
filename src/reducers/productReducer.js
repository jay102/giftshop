
import { showPdtDesc } from '../actions';
import data from '../data/products.json'

const initState = data.products;

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case "SHOW_PRODUCT":
            // let product = action.payload.filter((pdt) => {
            //     return pdt.id === action.id
            // })
            return action.payload
               
    default:
        return state
}
}

export default productReducer;