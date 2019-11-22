import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});

        });
    }


    render() {
        var total = this.props.cart.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)

        return (
            <>
                <nav>
                    <div className="nav-wrapper pink lighten-1">
                        <Link to="/" className="brand-logo">
                            GiftShop
                        </Link>
                        <ul className="right ">
                            <li>
                                <Link to="#"><i className="material-icons ">search</i></Link>
                            </li>
                            <li><Link to="#"><i className="material-icons">attach_money</i></Link></li>
                            <li><Link to="#"><i className="material-icons">star</i></Link></li>
                            <li><Link to="/cart" >
                                <i className="material-icons" cart={total}>shopping_cart</i>
                            </Link></li>
                            <li><Link to="#loginModal" ><i className="material-icons modal-trigger" data-target="loginModal" > person  </i></Link></li>
                        </ul>

                    </div>
                    <div id="loginModal" className="modal" style={{ width: "400px", height: "200px", overflow: "hidden" }}>
                        <div className="modal-content">
                            <form >

                                <div className="black-text" style={{ border: "1px solid #9e9e9e", paddingLeft: "10px" }}>
                                    <label for="signin" >
                                        <input id="signin" name="login" type="radio" className="with-gap modal-trigger" data-target="signinModal" />
                                        <span>Sign in</span>
                                    </label>
                                </div>

                                <div className="black-text " style={{ border: "1px solid #9e9e9e", marginTop: "10px", paddingLeft: "10px" }}>
                                    <label for="guest" >
                                        <input id="guest" name="login" type="radio" className="with-gap modal-trigger" data-target="guestModal" />
                                        <span>Guest Checkout</span>
                                    </label>
                                </div>

                            </form>
                        </div>
                    </div>
                    {/* guest checkout modal structure  */}
                    <div id="guestModal" className="modal" style={{ width: "400px", height: "200px", overflow: "hidden" }}>
                        <div className="modal-content">
                            <form >
                                <label>Email:</label>
                                <input type="email" />
                                <button type="submit" className="small-btn btn pink right">Continue as guest </button>
                            </form>
                        </div>
                    </div>

                    {/* signin modal structure  */}
                    <div id="signinModal" className="modal " style={{ width: "600px", overflow: "scroll" }}>
                        <div className="modal-content">
                            <h4 className="black-text center">Log in</h4>
                            <p className="black-text ">If you are already registered please login with your existing email and password</p>
                            <form >
                                <label>Email:</label>
                                <input type="email" style={{marginTop:"-10px"}} />
                                <label>Password:</label>
                                <input type="password" />
                                <button type="submit" className=" waves-effect waves-light btn-large btn pink">Login</button>
                                <br />
                                <Link to="" className="black-text">Forgot Password</Link>
                            </form>
                        </div>
                    </div>



                    <div className="nav-wrapper pink darken-3">
                        <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                        <ul className="left hide-on-med-and-down">
                            <li><Link to="/productcategory">Browse Gifts</Link></li>
                        </ul>
                        <ul id="nav-mobile" className="right hide-on-med-and-down" >
                            <li><Link to="#">BirthdayGifts</Link></li>
                            <li><Link to="#">AnniversaryGifts</Link></li>
                            <li><Link to="#">SamedayDeliveryGifts</Link></li>

                        </ul>
                    </div>
                </nav >

                <ul id="slide-out" className="sidenav">
                    <li><a href="#!">Shop By Department</a></li>
                    <li><div className="divider"></div></li>
                    <li><Link to="/products" className="waves-effect">Christmas <i className="material-icons right">add</i></Link></li>
                    <li><Link to="/products" className="waves-effect">Anniversary<i className="material-icons right">add</i></Link></li>
                    <li><Link to="/products" className="waves-effect">Birthday<i className="material-icons right">add</i></Link></li>
                    <li><Link to="/products" className="waves-effect">Gift For Him<i className="material-icons right">add</i></Link></li>
                    <li><Link to="/products" className="waves-effect">Gift For Her<i className="material-icons right">add</i></Link></li>
                    <li><Link to="/products" className="waves-effect">Home & Garden<i className="material-icons right">add</i></Link></li>




                </ul>


            </>

        )
    }

}
function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Header);


  // const Header = ({auth}) => {
//     const authButton = auth ? (
//         <a href="http://react-ssr-api.herokuapp.com/logout">Logout</a>
//     ) : (
//         <a href="http://react-ssr-api.herokuapp.com/auth/google">Login</a>
//     );

//     return(
//         <nav>
//             <div classNameName="nav-wrapper teal">
//                 <Link to="/" className="brand-logo">GIFT SHOP</Link>
//                 <ul className="right">
//                     <li><Link to="/home">Home</Link></li>
//                     <li><Link to="/products">Products</Link></li>
//                     <li><Link to="/cart">Cart</Link></li>
//                     <li><Link to="/checkout">Checkout</Link></li>
//                     <li>{authButton}</li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// function mapStateToProps({ auth }) {
//     return { auth };
// }

// export default connect(mapStateToProps)(Header);