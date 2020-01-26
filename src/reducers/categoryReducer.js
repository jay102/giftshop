import { categoryConstants } from '../constants/categoy.constant';
import { categoryActions } from '../actions/category.action';

const initialState = { category: [], response: {} };

export default function (state = initialState, action) {
    switch (action.type) {
        case categoryConstants.ADDCATEGORY_SUCCESS:
            return { ...state, response: action.payload }

        case categoryConstants.ADDPRODUCT_FAILURE:
            return { ...state, error: action.payload }

        case categoryConstants.FINDCATEGORY_SUCCESS:
            return { ...state, response: action.payload }

        case categoryConstants.FINDCATEGORY_FAILURE:
            return { ...state, error: action.payload }

        case categoryConstants.UPDATECATEGORY_SUCCESS:
            return { ...state, response: action.payload }

        case categoryConstants.UPDATECATEGORY_FAILURE:
            return { ...state, error: action.payload }

        case categoryConstants.DELETECATEGORY_SUCCESS:
            return { ...state, response: action.payload }

        case categoryConstants.DELETECATEGORY_FAILURE:
            return { ...state, error: action.payload }

        case categoryConstants.FETCH_CATEGORY:
            return { ...state, category: action.payload }

        default:
            return state
    }
}