const BASE_URL = localStorage.getItem('base_url');

const handleResponse = (response) => {
    if (!response.ok) {
        return Promise.reject(response.json())
    }
    return response.json()

}

const addCategory = (category) => {
    const requestOptions = {
        method: 'POST',
        body: category
    }
    return fetch(`${BASE_URL}/category`, requestOptions).then(handleResponse)
}

const fetchCategory = () => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },

    }
    return fetch(`${BASE_URL}/category`, requestOptions).then(handleResponse)
}

const findCategory = (categoryName) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },


    }
    return fetch(`${BASE_URL}/category/${categoryName}`, requestOptions).then(handleResponse)
}

const updateCategory = (id) => {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    }
    return fetch(`${BASE_URL}/category/${id}`, requestOptions).then(handleResponse)
}

const deleteCategory = (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },

    }
    return fetch(`${BASE_URL}/category/${id}`, requestOptions).then(handleResponse)
}

export const categoryService = {
    fetchCategory,
    findCategory,
    addCategory,
    updateCategory,
    deleteCategory
}