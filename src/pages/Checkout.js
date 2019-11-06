import React from 'react';
import Cart from './Cart';


export default class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {
                name: "",
                email: ""
            }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value

        })
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    }


    render() {
        return (
            <div>
                <h2>Chekout Page</h2>
                <Cart />
                <form>
                    <label> Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} /> <br /> <br />
                    </label>
                    <label> Email:
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange} /><br /> <br />
                    </label>
                    <button type="submit">Send Order</button>
                </form>
            </div>
        )

    }

}