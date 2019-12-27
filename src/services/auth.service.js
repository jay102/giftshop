// just like we did on the constants folder, we replicated the same architecture here
//we basically write our code here and export, after that we also export from ur index.js file

//we use this service class to make all our network requests, so should incase there's a need to change apis we do it from one file
//and also to avoid duplications.
//here we would use the fetch api to make requests and then return a promise

const BASE_URL= localStorage.getItem("base_url");
 

const handleResponse = (response) => {
    if(!response.ok){
        Promise.reject(response.json())
    }
    return response.json();
}
const login = (email,password) => {
    const requestOptions = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password})
    }
    return fetch(`${BASE_URL}/auth/login`,requestOptions).then(handleResponse)
}

const register = (info) => {
    const requestOptions = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(info)
    }
    return fetch(`${BASE_URL}/auth/register`,requestOptions).then(handleResponse)
}

const currentUser = (token) => {
    const requestOptions = {
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }
    return fetch(`${BASE_URL}/current_user/${token}`,requestOptions).then(handleResponse)
}
export const authService = {
    login,register,currentUser
    }