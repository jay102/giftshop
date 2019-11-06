import React from 'react';
//import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCardBody } from "mdbreact";

export default function ProductListItem(props) {
    return (
        <div class="row">
       <div class="col s4"><div class="card-panel grey">4</div></div>
       <div class="col s4"><div class="card-panel grey">4</div></div>
       <div class="col s4"><div class="card-panel grey">4</div></div>
     </div>

        )
    }
        // <MDBContainer>
        //     <MDBRow>
        //         <MDBCol size="4">
        //             <a href="/bdaygift">
        //                 {props.product.name}
        //                 <img
        //                     src={props.product.imgUrl} className="img-fluid" alt="" style={{ marginTop: "10px" }}
        //                 />
        //                 £{props.product.price}
        //             </a>
        //             <MDBCardBody>
        //                 <MDBBtn href="#"
        //                     onClick={() => props.addToCart(props.product)}>add to cart({
        //                         (props.cartItem && props.cartItem.quantity) || 0
        //                     })
        //                     </MDBBtn>
        //                 {
        //                     props.cartItem
        //                         ?
        //                         <MDBBtn
        //                             onClick={() => props.removeFromCart(props.cartItem)}>Remove
        //                     </MDBBtn>
        //                         : null
        //                 }
        //             </MDBCardBody>
        //         </MDBCol>

        //         <MDBCol size="4">
        //             <a href="/bdaygift">
        //                 {props.product.name}
        //                 <img
        //                     src={props.product.imgUrl} className="img-fluid" alt="" style={{ marginTop: "10px" }}
        //                 />
        //                 £{props.product.price}
        //             </a>
        //             <MDBCardBody>
        //                 <MDBBtn href="#"
        //                     onClick={() => props.addToCart(props.product)}>add to cart({
        //                         (props.cartItem && props.cartItem.quantity) || 0
        //                     })
        //                     </MDBBtn>
        //                 {
        //                     props.cartItem
        //                         ?
        //                         <MDBBtn
        //                             onClick={() => props.removeFromCart(props.cartItem)}>Remove
        //                     </MDBBtn>
        //                         : null
        //                 }
        //             </MDBCardBody>
        //         </MDBCol>

        //         <MDBCol size="4">
        //             <a href="/bdaygift">
        //                 {props.product.name}
        //                 <img
        //                     src={props.product.imgUrl} className="img-fluid" alt="" style={{ marginTop: "10px" }}
        //                 />
        //                 £{props.product.price}
        //             </a>
        //             <MDBCardBody>
        //                 <MDBBtn href="#"
        //                     onClick={() => props.addToCart(props.product)}>add to cart({
        //                         (props.cartItem && props.cartItem.quantity) || 0
        //                     })
        //                     </MDBBtn>
        //                 {
        //                     props.cartItem
        //                         ?
        //                         <MDBBtn
        //                             onClick={() => props.removeFromCart(props.cartItem)}>Remove
        //                     </MDBBtn>
        //                         : null
        //                 }
        //             </MDBCardBody>
        //         </MDBCol>
        //     </MDBRow>
        //     <MDBRow>
        //         <MDBCol sm="4">
        //             <a href="/weddinggift">
        //                 {props.product.name}
        //                 <img
        //                     src={props.product.imgUrl} className="img-fluid" alt="" style={{ marginTop: "10px" }}
        //                 />
        //                 £{props.product.price}
        //             </a>
        //             <MDBCardBody>
        //                 <MDBBtn href="#"
        //                     onClick={() => props.addToCart(props.product)}>add to cart({
        //                         (props.cartItem && props.cartItem.quantity) || 0
        //                     })
        //                     </MDBBtn>
        //                 {
        //                     props.cartItem
        //                         ?
        //                         <MDBBtn
        //                             onClick={() => props.removeFromCart(props.cartItem)}>Remove
        //                     </MDBBtn>
        //                         : null
        //                 }
        //             </MDBCardBody>
        //         </MDBCol>

        //         <MDBCol sm="4">
        //             <a href="/weddinggift">
        //                 {props.product.name}
        //                 <img
        //                     src={props.product.imgUrl} className="img-fluid" alt="" style={{ marginTop: "10px" }}
        //                 />
        //                 £{props.product.price}
        //             </a>
        //             <MDBCardBody>
        //                 <MDBBtn href="#"
        //                     onClick={() => props.addToCart(props.product)}>add to cart({
        //                         (props.cartItem && props.cartItem.quantity) || 0
        //                     })
        //                     </MDBBtn>
        //                 {
        //                     props.cartItem
        //                         ?
        //                         <MDBBtn
        //                             onClick={() => props.removeFromCart(props.cartItem)}>Remove
        //                     </MDBBtn>
        //                         : null
        //                 }
        //             </MDBCardBody>
        //         </MDBCol>

        //         <MDBCol sm="4">
        //             <a href="/weddinggift">
        //                 {props.product.name}
        //                 <img
        //                     src={props.product.imgUrl} className="img-fluid" alt="" style={{ marginTop: "10px" }}
        //                 />
        //                 £{props.product.price}
        //             </a>
        //             <MDBCardBody>
        //                 <MDBBtn href="#"
        //                     onClick={() => props.addToCart(props.product)}>add to cart({
        //                         (props.cartItem && props.cartItem.quantity) || 0
        //                     })
        //                     </MDBBtn>
        //                 {
        //                     props.cartItem
        //                         ?
        //                         <MDBBtn
        //                             onClick={() => props.removeFromCart(props.cartItem)}>Remove
        //                     </MDBBtn>
        //                         : null
        //                 }
        //             </MDBCardBody>
        //         </MDBCol>
        //     </MDBRow>

        //     <MDBRow>
        //         <MDBCol md="4">
        //             <a href="/weddinggift">
        //                 {props.product.name}
        //                 <img
        //                     src={props.product.imgUrl} className="img-fluid" alt="" style={{ marginTop: "10px" }}
        //                 />
        //                 £{props.product.price}
        //             </a>
        //             <MDBCardBody>
        //                 <MDBBtn href="#"
        //                     onClick={() => props.addToCart(props.product)}>add to cart({
        //                         (props.cartItem && props.cartItem.quantity) || 0
        //                     })
        //                     </MDBBtn>
        //                 {
        //                     props.cartItem

        //                         ?
        //                         <MDBBtn
        //                             onClick={() => props.removeFromCart(props.cartItem)}>Remove
        //                     </MDBBtn>
        //                         : null
        //                 }
        //             </MDBCardBody>
        //         </MDBCol>

        //         <MDBCol md="4">
        //             <a href="/xmasgift">
        //                 {props.product.name}
        //                 <img
        //                     src={props.product.imgUrl} className="img-fluid" alt="" style={{ marginTop: "10px" }}
        //                 />
        //                 £{props.product.price}
        //             </a>
        //             <MDBCardBody>
        //                 <MDBBtn href="#"
        //                     onClick={() => props.addToCart(props.product)}>add to cart({
        //                         (props.cartItem && props.cartItem.quantity) || 0
        //                     })
        //                     </MDBBtn>
        //                 {
        //                     props.cartItem
        //                         ?
        //                         <MDBBtn
        //                             onClick={() => props.removeFromCart(props.cartItem)}>Remove
        //                     </MDBBtn>
        //                         : null
        //                 }
        //             </MDBCardBody>
        //         </MDBCol>
        //         <MDBCol md="4">
        //             <a href="/weddinggift">
        //                 {props.product.name}
        //                 <img
        //                     src={props.product.imgUrl} className="img-fluid" alt="" style={{ marginTop: "10px" }}
        //                 />
        //                 £{props.product.price}
        //             </a>
        //             <MDBCardBody>
        //                 <MDBBtn href="#"
        //                     onClick={() => props.addToCart(props.product)}>add to cart({
        //                         (props.cartItem && props.cartItem.quantity) || 0
        //                     })
        //                     </MDBBtn>
        //                 {
        //                     props.cartItem
        //                         ?
        //                         <MDBBtn
        //                             onClick={() => props.removeFromCart(props.cartItem)}>Remove
        //                     </MDBBtn>
        //                         : null
        //                 }
        //             </MDBCardBody>
        //         </MDBCol>
        //     </MDBRow>

        //     <MDBRow>
        //         <MDBCol lg="4">
        //             <a href="/weddinggift">
        //                 {props.product.name}
        //                 <img
        //                     src={props.product.imgUrl} className="img-fluid" alt="" style={{ marginTop: "10px" }}
        //                 />
        //                 £{props.product.price}
        //             </a>
        //             <MDBCardBody>
        //                 <MDBBtn href="#"
        //                     onClick={() => props.addToCart(props.product)}>add to cart({
        //                         (props.cartItem && props.cartItem.quantity) || 0
        //                     })
        //                     </MDBBtn>
        //                 {
        //                     props.cartItem
        //                         ?
        //                         <MDBBtn
        //                             onClick={() => props.removeFromCart(props.cartItem)}>Remove
        //                     </MDBBtn>
        //                         : null
        //                 }
        //             </MDBCardBody>
        //         </MDBCol>
        //         <MDBCol lg="4">
        //             <a href="/weddinggift">
        //                 {props.product.name}
        //                 <img
        //                     src={props.product.imgUrl} className="img-fluid" alt="" style={{ marginTop: "10px" }}
        //                 />
        //                 £{props.product.price}
        //             </a>
        //             <MDBCardBody>
        //                 <MDBBtn href="#"
        //                     onClick={() => props.addToCart(props.product)}>add to cart({
        //                         (props.cartItem && props.cartItem.quantity) || 0
        //                     })
        //                     </MDBBtn>
        //                 {
        //                     props.cartItem
        //                         ?
        //                         <MDBBtn
        //                             onClick={() => props.removeFromCart(props.cartItem)}>Remove
        //                     </MDBBtn>
        //                         : null
        //                 }
        //             </MDBCardBody>
        //         </MDBCol>
        //         <MDBCol lg="4">
        //             <a href="/weddinggift">
        //                 {props.product.name}
        //                 <img
        //                     src={props.product.imgUrl} className="img-fluid" alt="" style={{ marginTop: "10px" }}
        //                 />
        //                 £{props.product.price}
        //             </a>
        //             <MDBCardBody>
        //                 <MDBBtn href="#"
        //                     onClick={() => props.addToCart(props.product)}>add to cart({
        //                         (props.cartItem && props.cartItem.quantity) || 0
        //                     })
        //                     </MDBBtn>
        //                 {
        //                     props.cartItem
        //                         ?
        //                         <MDBBtn
        //                             onClick={() => props.removeFromCart(props.cartItem)}>Remove
        //                     </MDBBtn>
        //                         : null
        //                 }
        //             </MDBCardBody>
        //         </MDBCol>
        //     </MDBRow>

        //     <MDBRow>
        //         <MDBCol xl="4">
        //             <a href="/weddinggift">
        //                 {props.product.name}
        //                 <img
        //                     src={props.product.imgUrl} className="img-fluid" alt="" style={{ marginTop: "10px" }}
        //                 />
        //                 £{props.product.price}
        //             </a>
        //             <MDBCardBody>
        //                 <MDBBtn href="#"
        //                     onClick={() => props.addToCart(props.product)}>add to cart({
        //                         (props.cartItem && props.cartItem.quantity) || 0
        //                     })
        //                     </MDBBtn>
        //                 {
        //                     props.cartItem
        //                         ?
        //                         <MDBBtn
        //                             onClick={() => props.removeFromCart(props.cartItem)}>Remove
        //                     </MDBBtn>
        //                         : null
        //                 }
        //             </MDBCardBody>
        //         </MDBCol>
        //         <MDBCol xl="4">
        //             <a href="/weddinggift">
        //                 {props.product.name}
        //                 <img
        //                     src={props.product.imgUrl} className="img-fluid" alt="" style={{ marginTop: "10px" }}
        //                 />
        //                 £{props.product.price}
        //             </a>
        //             <MDBCardBody>
        //                 <MDBBtn href="#"
        //                     onClick={() => props.addToCart(props.product)}>add to cart({
        //                         (props.cartItem && props.cartItem.quantity) || 0
        //                     })
        //                     </MDBBtn>
        //                 {
        //                     props.cartItem
        //                         ?
        //                         <MDBBtn
        //                             onClick={() => props.removeFromCart(props.cartItem)}>Remove
        //                     </MDBBtn>
        //                         : null
        //                 }
        //             </MDBCardBody>
        //         </MDBCol>
        //         <MDBCol xl="4">
        //             <a href="/weddinggift">
        //                 {props.product.name}
        //                 <img
        //                     src={props.product.imgUrl} className="img-fluid" alt="" style={{ marginTop: "10px" }}
        //                 />
        //                 £{props.product.price}
        //             </a>
        //             <MDBCardBody>
        //                 <MDBBtn href="#"
        //                     onClick={() => props.addToCart(props.product)}>add to cart({
        //                         (props.cartItem && props.cartItem.quantity) || 0
        //                     })
        //                     </MDBBtn>
        //                 {
        //                     props.cartItem
        //                         ?
        //                         <MDBBtn
        //                             onClick={() => props.removeFromCart(props.cartItem)}>Remove
        //                     </MDBBtn>
        //                         : null
        //                 }
        //             </MDBCardBody>
        //         </MDBCol>
        //     </MDBRow>
        // </MDBContainer>
   
