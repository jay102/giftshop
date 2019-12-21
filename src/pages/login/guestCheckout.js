import React from 'react';
export default function GuestCheckout(){
    return(
        <div>
        <form >
        <div className="input-field">
            <input type="email" id="email" />
            <label for="email"> Your Email:</label>
        </div>
        <button type="submit" className="small-btn btn pink right">Continue as guest </button>
    </form>
    </div>
    )
}