import React from 'react';
import {connect} from 'react-redux';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [], action: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
       let datas= this.state.datas;
       let name= this.refs.name.value;
       let email= this.refs.email.value;
       let pwd= this.refs.password.value;

       if(this.state.action===0){
           let data = {name,email,pwd};
           datas.push(data);
       }

       this.setState({
           datas:datas,
           action:0
       })

       this.refs.myForm.reset();
       this.refs.name.focus();

    }
componentDidMount(){
    this.refs.name.focus();
}

    render() {

        return (
            <div>
                <br/><br/>
            <div className="container">
                <h4 className="black-text center" style={{marginTop:"40px"}}>Register</h4>
                                <form ref = "myForm" >
                    <div className="input-field" style={{ marginTop: "-35px" }} >
                        <input type="text" ref="name" />
                        <label for="name">Name:</label>
                    </div>
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
                            Register
                              </button>
                    </div>
                </form>
            </div>
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Register);