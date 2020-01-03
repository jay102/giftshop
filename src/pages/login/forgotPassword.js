import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {authActions} from '../../actions';

class ForgetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, confirmPassword } = this.state;
        const{dispatch} = this.props;
        if(password !== confirmPassword){
            alert("passwords are not matching ! ")
        }
        if(email!=='' && password !=='' && confirmPassword !==''){
            dispatch(authActions.forgetPassword(email,password))
        }
        else{
            alert(" One or more fields cannot be empty")
        }


    }
    render() {
        const {auth} = this.props;
        let isSuccess, response;
        if(auth.response.message){
            isSuccess= auth.response.message;
            response = auth.response.message
        }
        if (auth.response.error !== undefined) {
            response = auth.response.error
        }

        return (
            <>
            {response ? alert(response) : null}
            {isSuccess && <Redirect to ='/login' />}
                <br /><br /><br />
                <div className="container" style={{ margin: "auto" }}>
                    <h4 className="black-text center"> Forgot Password </h4>
                    <br />
                    <div className="card">
                        <form >
                            <div className="input-field" style={{ marginTop: "15px" }} >
                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                                <label for="email" style={{ paddingLeft: "20px" }}>Email:</label>
                            </div>
                            <div className="input-field">
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                                <label for="password" style={{ paddingLeft: "20px" }}>Password:</label>
                            </div>
                            <div className="input-field">
                                <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
                                <label for="password" style={{ paddingLeft: "20px" }}> Confirm Password:</label>
                            </div>
                            <div className="center">
                                <button
                                    className=" waves-effect waves-light btn-small btn pink "
                                    style={{ marginBottom: "20px" }}
                                    type="submit"
                                    onClick={this.handleSubmit}
                                >  Change Password
                              </button>
                            </div>
                        </form>

                    </div>
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
export default connect(mapStateToProps)(ForgetPassword);