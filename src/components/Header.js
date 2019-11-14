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
    }
    render() {

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
                                <i className="material-icons">shopping_cart</i>
                                {this.props.cart.reduce((acc, item) => {
                                    return acc + item.quantity
                                }, 0)}</Link></li>
                            <li><Link to="#"><i className="material-icons">person</i></Link></li>
                        </ul>
                    </div>
                    <div className="nav-wrapper pink darken-2">
                        <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                        <ul className="left hide-on-med-and-down">
                            <li><Link to="/products">Browse Gifts</Link></li>
                        </ul>
                        <ul id="nav-mobile" className="right hide-on-med-and-down" >
                            <li><Link to="#">BirthdayGifts</Link></li>
                            <li><Link to="#">AnniversaryGifts</Link></li>
                            <li><Link to="#">SamedayDeliveryGifts</Link></li>
                            
                        </ul>
                    </div>
                </nav>

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