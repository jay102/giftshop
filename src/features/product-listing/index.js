import React from "react";
import ProductListItem from './productlistitem';
import { connect } from 'react-redux';

function ProductListing(props) {

    return (
        <div>
            {props.products.map(product =>
                <div key={product.name}>
                    <ProductListItem product={product}
                        addToCart={props.addToCart}
                        removeFromCart={props.removeFromCart}
                        cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
                        cart={props.cart}
                    />
                </div>
            )}
        </div>
    )
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
        }
         
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
