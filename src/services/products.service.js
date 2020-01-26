
const BASE_URL = localStorage.getItem("base_url");

const handleResponse = (response) => {
    if (!response.ok) {
        return Promise.reject(response.json())
    }
    return response.json();
}

const addProduct = (product) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    }
    return fetch(`${BASE_URL}/product`, requestOptions).then(handleResponse)
}

const fetchAllProduct = () => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
      
    }
    return fetch(`${BASE_URL}/product`, requestOptions).then(handleResponse)
}

const productDetail =(id)=>{
    const requestOptions={
        method:'GET',
        headers:{
            'Content-Type' : 'application/json'
        },
       
    }
    return fetch(`${BASE_URL}/product/${id}`, requestOptions).then(handleResponse)
}

const updateProduct = (id) => {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    }
    return fetch(`${BASE_URL}/product/${id}`, requestOptions).then(handleResponse)
}

const deleteProduct = (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
       
    }
    return fetch(`${BASE_URL}/product/${id}`, requestOptions).then(handleResponse)
}

export const productsService ={
    addProduct,
    updateProduct,
    deleteProduct,
    productDetail,
    fetchAllProduct
}