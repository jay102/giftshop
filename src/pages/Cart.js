import React from 'react';
import { connect } from 'react-redux';
//import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

function sort(items) {
    return items.sort((a, b) => a.id < b.id)
}

function Cart(props){
return (
    <table style={{ marginTop: "20px" }}>
        <thead color="grey" textWhite >
            <tr >
                <th>#</th>
                <th>Item</th>
                <th>Quantity</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                sort(props.cart).map(item => <div key={item.id}>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>£{item.price* item.quantity}</td>
                        <td>
                            <button onClick={() => props.addToCart(item)}>+</button>
                        </td>
                        <td>
                            <button onClick={() => props.removeFromCart(item)}>-</button>
                        </td>
                        <td>
                            <button onClick={() => props.removeAllFromCart(item)}>Remove All Items</button>
                        </td>
                    </tr>
                </div>
                )}
        </tbody>
    </table >
    )}




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


