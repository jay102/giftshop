import React from 'react';
import { Link } from 'react-router-dom';
 function ProductListItem(props) {
        
    return (
        <div className="col s4">

            <br /><br /><br />
            <Link to="#"><img src={props.product.imgUrl} alt="" className="responsive-img"/></Link>
            <p>{props.product.name}</p>
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
        </div>
   )
}



export default ProductListItem;


// <div style={{marginLeft:"-45px",marginRight:"40px"}}>
//     <br /><br /><br />
//     <table className="responsive-table" style={{marginTop:"20px", width:"200px",}} >
//         <tr style={{border: "8px solid #ec407a"}} >
//             <td >
//                 <img src={props.product.imgUrl} alt="" className="responsive-img" />
//             </td>
//         </tr>
//         <tr>
//             <td>
//                 <button
//                     href="#"
//                     className="waves-effect btn pink darken-2"
//                     onClick={() => props.addToCart(props.product)}>add to cart({
//                         (props.cartItem && props.cartItem.quantity) || 0
//                     })
//              </button >
//                 {
//                     props.cartItem ?
//                         <button
//                             className="waves-effect btn blue darken-2"
//                             onClick={() => props.removeFromCart(props.cartItem)}
//                         > Remove</button>
//                         : null
//                 }


//             </td>
//         </tr>
//     </table>
//  </div >








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








