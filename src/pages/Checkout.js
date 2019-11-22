import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import PaypalExpressBtn from 'react-paypal-express-checkout';


function sort(items) {
    return items.sort((a, b) => a.id < b.id)
}
// function handlePageChange() {
//     window.location = "/checkout";
//   }

function Checkout(props) {

    const total = props.cart.reduce((acc, item) => {
        return (acc + item.price * item.quantity)
    }, 0)

    const client = {
        sandbox: 'AdEW2peuaERE52fqpQqAWwdNnreS9Z4CeyugPzMYfeSPSek3auaH8lpr4pnGpjI4SQPGnJ5UronyLw9B'

    }
    function handleToken(token, address) {
        console.log({ token, address })
    }
    return (
        <div className="row">
            <div className="col s8">
                <table style={{ marginTop: "20px" }}>
                    <thead  >
                        <tr >
                            <th># Item Detail</th>
                            <th>Quantity</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            sort(props.cart).map(item => <tr key={item.id}>
                                <td className="chip" style={{ marginTop: "10px" }}>
                                    <img src={item.imgUrl} classNmae="responsive-img" alt="" />{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>£{item.price * item.quantity}</td>
                                <td>
                                    <button
                                        className="btn-floating btn-small waves-effect waves-light pink"
                                        onClick={() => props.addToCart(item)}>
                                        <i className=" material-icons ">add</i>+</button>
                                </td>
                                <td>
                                    <button
                                        className="btn-floating btn-small waves-effect waves-light pink"
                                        onClick={() => props.removeFromCart(item)}>
                                        <i className="material-icons ">remove</i>-</button>
                                </td>
                                <td>
                                    <button onClick={() => props.removeAllFromCart(item)}>Remove All Items</button>
                                </td>
                            </tr>

                            )}
                    </tbody>
                </table >
            </div>

            <div className="col s4 ">
                <table style={{ marginTop: "20px", border: "1px solid grey" }} >
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td> <h6 className="center">Order Summary </h6></td>
                        </tr>
                        <tr>
                            <td>
                                <p style={{ paddingLeft: "5px" }} >Your order qualifies for free delivery</p> </td>
                        </tr>
                        <tr>
                            <td>
                                <p style={{ paddingLeft: "5px" }} >Total: £ {total}
                                </p>
                            </td>
                        </tr>
                        <tr >
                            <td className="right" style={{ display: "flex" }} >
                                <StripeCheckout
                                    stripeKey="pk_test_ukemeE5527HxC1FqwuyVsLUW00UvxRosQW"
                                    token={handleToken}
                                    billingAddress
                                    shippingAddress
                                    amount={total * 100}
                                />
                                <PaypalExpressBtn
                                    client={client}
                                    currency={'USD'}
                                    total={total}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}




function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({
                type: "ADD",
                payload: item
            })
        },
        removeFromCart: (item) => {
            dispatch({
                type: "REMOVE",
                payload: item
            })
        },
        removeAllFromCart: (item) => {
            dispatch({
                type: "REMOVE_ALL",
                payload: item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);


