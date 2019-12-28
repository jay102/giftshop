import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect }from 'react-redux';
import {authActions} from '../../actions';

class Logout extends React.Component{
    render(){
        return (
            <>
           
            <div>
                <br/><br/><br/>
                <h4> User logged out successfully</h4>
            </div>
            </>
        )
    }
}

function mapStateToProps(state){
    return{
        auth : state.auth
    }
}

export default  connect(mapStateToProps)(Logout);
