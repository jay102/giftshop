import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from '../../actions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            action: 0,
            name: "",
            email: " ",
            password: ""

        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email !="" && password !=="") {
            alert(" Name or password cannnot be empty")
        }
        if(!email || !password){
            dispatch(authActions.login(email, password));
        }
                else {
            dispatch(authActions.login(email, password));
        }

    }

    render() {
        const { auth } = this.props;
        if (auth.response) {
            alert(auth.response.message)
        }
        return (
            <div>
                <h4 className="black-text center">Log in </h4>
                <p className="black-text  center " style={{ fontSize: "12px" }}>If you are already<a href="/register"> <strong className="blue-text" >registered </strong></a> please login with your existing email and password</p>
                <form name="myForm">
                    <div className="input-field" style={{ marginTop: "-35px" }} >
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        <label for="email">Email:</label>
                    </div>
                    <div className="input-field">
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <label for="password">Password:</label>
                    </div>
                    <div className="center">
                        <button
                            className=" waves-effect waves-light btn-small btn pink "
                            type="submit"
                            onClick={this.handleSubmit}
                        >
                            Login
                              </button>
                    </div>
                </form>
                <p
                    style={{ fontSize: "14px", marginTop: "-15px" }} className="center" >
                    <a href="# " className="black-text">Forgot Password</a>
                    <a href="/register" className="black-text"> | Register</a>
                </p>
                <p className="black-text center" style={{ marginTop: "-35px" }}>Login with
            <span>
                        <Link to="#"> <img src="https://img.icons8.com/nolan/24/000000/facebook-new.png" ></img></Link>
                        <Link to="#"><img src="https://img.icons8.com/cute-clipart/24/000000/google-logo.png"></img></Link>
                    </span>
                </p>
            </div>


        )
    }

}
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Login)