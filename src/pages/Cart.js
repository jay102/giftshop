import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// function handlePageChange() {
//     window.location = "/checkout";
//   }

function Cart(props) {

    function sort(items) {
        return items.sort((a, b) => a.id < b.id)
    }

    const total = props.cart.reduce((acc,item)=>{
        return (acc+item.price * item.quantity)
    },0)

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
                                    <img src={item.imgUrl} className="responsive-img" alt="" />{item.name}</td>
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
                        <tr>
                            <td>
                                <button className="pink darken-3 btn ">
                                    <Link to="/checkout" style={{ color: "white" }}>Continue to Checkout</Link>
                                </button>
                                <br />
                                <img src="https://img.icons8.com/color/30/000000/visa.png" alt="img" />
                                <img src="https://img.icons8.com/color/30/000000/bank-card-front-side.png"  alt="img"/>
                                <img src="https://img.icons8.com/color/30/000000/mastercard-logo.png" alt="img"></img>
                                <img src="https://img.icons8.com/color/30/000000/paypal.png" alt="img"></img>


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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);


