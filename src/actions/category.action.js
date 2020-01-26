import { categoryService } from '../services/category.service';
import { categoryConstants } from '../constants/categoy.constant';

const addCategory = (category) => {
    const addCategorySuccess = (payload) => (
        {
            type: categoryConstants.ADDCATEGORY_SUCCESS,
            payload: payload
        }
    )
    const addCategoryFailure = (error) => (
        {
            type: categoryConstants.ADDPRODUCT_FAILURE,
            payload: error
        }
    );
    return async function dispatch(dispatch) {
        try {
            const result = await categoryService.addCategory(category);
            dispatch(addCategorySuccess(result))
        } catch (err) {
            const error = await err;
            dispatch(addCategoryFailure(error))
        }
    }
}

const findCategory = (categoryName) => {
    const findCategorySuccess = (payload) => (
        {
            type: categoryConstants.FINDCATEGORY_SUCCESS,
            payload: payload
        }
    );
    const findCategoryFailure = (error) => (
        {
            type: categoryConstants.FINDCATEGORY_FAILURE,
            payload: error
        }
    );
    return async function dispatch(dispatch) {
        try {
            const result = await categoryService.findCategory(categoryName);
            dispatch(findCategorySuccess(result))
        } catch (err) {
            const error = await err;
            dispatch(findCategoryFailure(error))
        }
    }

}
const updateCategory = (id) => {
    const updateCategorySuccess = (payload) => (
        {
            type: categoryConstants.UPDATECATEGORY_SUCCESS,
            payload: payload
        }
    );

    const updateCategoryFailure = (error) => (
        {
            type: categoryConstants.UPDATECATEGORY_FAILURE,
            payload: error
        }
    );

    return async function dispatch(dispatch) {
        try {
            const result = await categoryService.updateCategory(id);
            dispatch(updateCategorySuccess(result));
        }
        catch (err) {
            const error = await err;
            dispatch(updateCategoryFailure(error))
        }

    }
}

const deleteCategory = (id) => {
    const deleteCategorySuccess = (payload) => (
        {
            type: categoryConstants.DELETECATEGORY_SUCCESS,
            payload: payload
        }
    );

    const deleteCategoryFailure = (error) => (
        {
            type: categoryConstants.DELETECATEGORY_FAILURE,
            payload: error
        }
    );
    return async function dispatch(dispatch) {
        try {
            const result = await categoryService.deleteCategory(id);
            dispatch(deleteCategorySuccess(result))
        }
        catch (err) {
            const error = await err;
            dispatch(deleteCategoryFailure(error))
        }
    }
}

const fetchCategory =()=>{
    const fetchCategorySuccess=(payload)=>(
        {
            type: categoryConstants.FETCH_CATEGORY,
            payload:payload
        }
    )
    return async function dispatch(dispatch){
        try{
            const result = await categoryService.fetchCategory();
            dispatch (fetchCategorySuccess(result.category))
        }
        catch(err){
            const error = await err;
            console.log(error);
        }
    }
}

export const categoryActions={
    addCategory,
    updateCategory,
    deleteCategory,
    fetchCategory,
    findCategory
}