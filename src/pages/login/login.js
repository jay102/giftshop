import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            action: 0
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let datas = this.state.datas;
        let email = this.refs.email.value;
        let pwd = this.refs.password.value;

        if (this.state.action === 0) {
            let data = { email, pwd }
            datas.push(data)
        }

        this.setState({
            datas: datas,
            action: 0
        })

        this.refs.myForm.reset();
        this.refs.email.focus();
    }
    componentDidMount() {
        this.refs.email.focus();
    }
    render() {
        return (
            <div>
                <h4 className="black-text center">Log in </h4>
                <p className="black-text  center " style={{ fontSize: "12px" }}>If you are already<a href="/register"> <strong className="blue-text" >registered </strong></a> please login with your existing email and password</p>
                <form ref="myForm">
                    <div className="input-field" style={{ marginTop: "-35px" }} >
                        <input type="email" ref="email" />
                        <label for="email">Email:</label>
                    </div>
                    <div className="input-field">
                        <input type="password" ref="password" />
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