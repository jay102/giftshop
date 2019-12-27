export const ADD = "add_to_cart";
export const REMOVE = "reove_from_cart";

export default function addToCart  (item) {
    return {
        type: "ADD",
        payload: item
    }
}

export const removeFromCart = (item) => {
    return {
        type: "REMOVE",
        payload: item
    }
}

export const FETCH_CURRENT_USER = 'fetch_current_user';

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get("/current_user");
    
    dispatch ({
        type: FETCH_CURRENT_USER,
        payload: res
    });
};

export const showPdtDesc=( data,id)=>{
    return {
        type:"SHOW_PRODUCT",
        payload: data,
        id:parseInt(id)
       
    }
}