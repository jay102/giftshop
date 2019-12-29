//we import our service class here and constants
import { authService } from '../services';
import { authConstants } from '../constants'

// just like we did in the constants and services we write our functions here and export

const clearResponse = () => {
    return {
        type: authConstants.CLEAR_RESPONSE
    }
}

const logout = () => {
    authService.logout()
    return {
        type: authConstants.LOGOUT
    }
       
}

const login = (email, password) => {

    //we write our first action creator here
    const loginSuccess = (payload) => (
        {
            type: authConstants.LOGIN_SUCCESS,
            payload: payload
        }
    );
    const loginFailure = (error) => (
        {
            type: authConstants.LOGIN_FAILURE,
            payload: error
        }
    );



    //we use a try catch block here to make a request with our service class and then pass the result to our action creator created above
    // then we call the dispatch method to dispatch our action creator which returns an action to our redux store

    //we'd be calling our dispatch from props, so therefore we'd return a dispatch call here

    return async function dispatch(dispatch) {

        try {
            //we await the result here since we returned a promise from our service class
            //we also pass the email and password here
            const result = await authService.login(email, password);
            //finally we dispatch by calling our action creator above and passing the result
            localStorage.setItem('user',JSON.stringify(result.user))
            dispatch(loginSuccess(result))
            console.log(result)
        } catch (err) {

            // if theres an error here we dispatch login failed
            const error = await err;
            console.log(error)
            dispatch(loginFailure(error))
        }

    }

}

const register = (info) => {

    //we write our first action creator here
    const registerSuccess = (payload) => (
        {
            type: authConstants.REGISTER_SUCCESS,
            payload: payload
        }
    );
    const registerFailure = (error) => (
        {
            type: authConstants.REGISTER_FAILURE,
            payload: error
        }
    );

    return async function dispatch(dispatch) {

        try {

            const result = await authService.register(info);
            dispatch(registerSuccess(result))
        } catch (err) {
            const error = await err;
            dispatch(registerFailure(error))
        }
    }

}
//we export here
export const authActions = {
    login,
    register,
    clearResponse,
    logout
}