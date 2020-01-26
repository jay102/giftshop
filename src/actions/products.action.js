import { productsService } from '../services';
import { productsConstants } from '../constants';

const addProduct = (product) => {

    //we write our first action creator here
    const addProductSuccess = (payload) => (
        {
            type: productsConstants.ADDPRODUCT_SUCCESS,
            payload: payload
        }
    );
    const addProductFailure = (error) => (
        {
            type: productsConstants.ADDPRODUCT_FAILURE,
            payload: error
        }
    );

    return async function dispatch(dispatch) {

        try {

            const result = await productsService.addProduct(product);
            dispatch(addProductSuccess(result))
        } catch (err) {
            const error = await err;
            dispatch(addProductFailure(error))
        }
    }
}

const productDetail = (id) => {
    const productDetailSuccess = (payload) => (
        {
            type: productsConstants.PRODUCTDETAIL_SUCCESS,
            payload: payload
        }
    );
    const productDetailFailure = (payload) => (
        {
            type: productsConstants.PRODUCTDETAIL_FAILURE,
            payload: payload
        }
    );
    return async function dispatch(dispatch) {
        try {
            const result = await productsService.productDetailSuccess(id);
            dispatch(productDetailSuccess(result))
        } catch (err) {
            const error = await err;
            dispatch(productDetailFailure(error))
        }
    }
}


const updateProduct = (id) => {
    const updateProductSuccess = (payload) => (
        {
            type: productsConstants.UPDATEPRODUCT_SUCCESS,
            payload: payload
        }
    );
    const updateProductFailure = (error) => (
        {
            type: productsConstants.UPDATEPRODUCT_FAILURE,
            payload: error
        }
    );
    return async function dispatch(dispatch) {
        try {
            const result = await productsService.updateProductSuccess(id);
            dispatch(updateProductSuccess(result))
        } catch (err) {
            const error = await err;
            dispatch(updateProductFailure(error))
        }
    }
}

const deleteProduct = (id) => {
    const deleteProductSuccess = (payload) => (
        {
            type: productsConstants.DELETEPRODUCT_SUCCESS,
            payload: payload
        }
    );
    const deleteProductFailure = (error) => (
        {
            type: productsConstants.DELETEPRODUCT_FAILURE,
            payload: error
        }
    );
    return async function dispatch(dispatch) {
        try {
            const result = await productsService.deleteProductSuccess(id);
            dispatch(deleteProductSuccess(result))
        } catch (err) {
            const error = await err;
            dispatch(deleteProductFailure(error))
        }
    }
}

const fetchAllProduct=()=>{
        const success = (payload) => (
        {
            type: productsConstants.FETCH_ALL_PRODUCT,
            payload: payload
        }
    );
        return async function dispatch(dispatch) {

        try {

            const result = await productsService.fetchAllProduct();
            dispatch(success(result))
        } catch (err) {
            const error = await err;
           console.log(err)
        }
    }
}

export const productsActions = {
    addProduct,
    productDetail,
    updateProduct,
    deleteProduct,
    fetchAllProduct
}
