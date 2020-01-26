import { productsConstants } from '../constants/products.constants';
import { productsActions } from '../actions/products.action';


const initState = { products: [], response: {} };

export default function (state = initState, action) {
    switch (action.type) {
        case productsConstants.ADDPRODUCT_SUCCESS:
            return { ...state, response: action.payload }

        case productsConstants.ADDPRODUCT_FAILURE:
            return { ...state, error: action.payload }

        case productsConstants.PRODUCTDETAIL_SUCCESS:
            return { ...state, response: action.payload }

        case productsConstants.PRODUCTDETAIL_FAILURE:
            return { ...state, error: action.payload }

        case productsConstants.UPDATEPRODUCT_SUCCESS:
            return { ...state, response: action.payload }

        case productsConstants.UPDATEPRODUCT_FAILURE:
            return { ...state, error: action.payload }

        case productsConstants.DELETEPRODUCT_SUCCESS:
            return { ...state, response: action.payload }

        case productsConstants.DELETEPRODUCT_FAILURE:
            return { ...state, error: action.payload }

            case productsConstants.FETCH_ALL_PRODUCT:
                return{ ...state, products:action.payload}

        default:
            return state
    }
}






















// const productReducer = (state = initState, action) => {
//     switch (action.type) {
//         case "SHOW_PRODUCT":
//             // let product = action.payload.filter((pdt) => {
//             //     return pdt.id === action.id
//             // })
//             return action.payload

//     default:
//         return state
// }
// }



