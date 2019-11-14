import React from 'react';
export default function ProductListItem(props) {

    return (
        <div style={{marginLeft:"-45px",marginRight:"40px"}}>
            <br /><br /><br />
            <table className="responsive-table" style={{marginTop:"20px", width:"200px",}} >
                <tr style={{border: "8px solid #ec407a"}} >
                    <td >
                        <img src={props.product.imgUrl} alt="" className="responsive-img" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button
                            href="#"
                            className="waves-effect btn pink darken-2"
                            onClick={() => props.addToCart(props.product)}>add to cart({
                                (props.cartItem && props.cartItem.quantity) || 0
                            })
                     </button >
                        {
                            props.cartItem ?
                                <button
                                    className="waves-effect btn blue darken-2"
                                    onClick={() => props.removeFromCart(props.cartItem)}
                                > Remove</button>
                                : null
                        }


                    </td>
                </tr>
            </table>








            {/* <div className="col s3">
                    <div className="card-panel pink lighten-1">
                        <img src={props.product.imgUrl} alt="" className="responsive-img" />
                        <button
                            href="#"
                            className="waves-effect btn pink darken-2"
                            onClick={() => props.addToCart(props.product)}>add to cart({
                                (props.cartItem && props.cartItem.quantity) || 0
                            })
                     </button>
                        {props.cartItem ?
                            <button
                                className="waves-effect btn blue darken-2"
                                onClick={() => props.removeFromCart(props.cartItem)}
                            > Remove</button>
                            : null}
                    </div>
                </div>
                <div className="col s3">
                    <div className="card-panel pink lighten-1">
                        <img src={props.product.imgUrl} alt="" className="responsive-img" />
                        <button
                            href="#"
                            className="waves-effect btn pink darken-3"
                            onClick={() => props.addToCart(props.product)}>add to cart({
                                (props.cartItem && props.cartItem.quantity) || 0
                            })
                     </button>
                        {props.cartItem ?
                            <button
                                className="waves-effect btn blue darken-3"
                                onClick={() => props.removeFromCart(props.cartItem)}
                            > Remove</button>
                            : null}
                    </div>
                </div>
                <div className="col s3">
                    <div className="card-panel pink lighten-1">
                        <img src={props.product.imgUrl} alt="" className="responsive-img" />
                        <button
                            href="#"
                            className="waves-effect btn pink darken-3"
                            onClick={() => props.addToCart(props.product)}>add to cart({
                                (props.cartItem && props.cartItem.quantity) || 0
                            })
                     </button>
                        {props.cartItem ?
                            <button
                                className="waves-effect btn blue darken-3"
                                onClick={() => props.removeFromCart(props.cartItem)}
                            > Remove</button>
                            : null}
                    </div>
                        </div>*/}

        </div >





    )
}

