import React from 'react';
import { connect } from 'react-redux';
import { authActions } from "../../actions"

class Register extends React.Component {
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
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = this.state
        const role = "user"
        const { dispatch } = this.props
        const info = { name, email, password, role }
        if (name !== "" && email != "" && password != "") {
            dispatch(authActions.register(info))
        }
        else {
            alert("email and password cannot be empty")
        }
    }

    render() {
        const { auth } = this.props
        //console.log(auth.respone)
        if (auth.response) {
            alert(auth.response.message);
        }

        return (
            <div>
                <br /><br />
                <div className="container">
                    <h4 className="black-text center" style={{ marginTop: "40px" }}>Register</h4>
                    <form name="myForm" >
                        <div className="input-field" style={{ marginTop: "-35px" }} >
                            <input type="text"  name="name" value={this.state.name} onChange={this.handleChange}  />
                            <label for="name">Name:</label>
                        </div>
                        <div className="input-field" style={{ marginTop: "-35px" }} >
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange}  />
                            <label for="email">Email:</label>
                        </div>
                        <div className="input-field">
                            <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
                            <label for="password">Password:</label>
                        </div>
                        <div className="center">
                            <button
                                className=" waves-effect waves-light btn-small btn pink "
                                type="submit"
                                onClick={this.handleSubmit}
                            >
                                Register
                              </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Register);
