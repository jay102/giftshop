//we import our service class here and constants
import { authService } from '../services';
import { userConstants} from '../constants'

// just like we did in the constants and services we write our functions here and export

const fetchCurrentUser = (email,password) => {

    //we write our first action creator here
    const fetch = (payload) => (
        {
            type:userConstants.FETCH_CURRENT_USER,
            payload:payload
        }
    );
    const fetchERROR = (error) => (
        {
            type:userConstants.FETCH_ERROR,
            payload:error
        }
    );

 return async function dispatch(dispatch){

        try{
            //we await the result here since we returned a promise from our service class
            //we also pass the token here
            const result = await authService.currentUser(token);
            dispatch(fetch(result))
        }catch(err){

            // if theres an error here we dispatch fetchError failed
            const error = await err;
            dispatch(fetchERROR(error))
            console.log(err)
        }    
 }

}

//we export here
export const userActions = {
    fetchCurrentUser,
    }