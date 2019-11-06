import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

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
                        <Link to="#!" className="brand-logo">Gift Shop</Link>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#"><i className="material-icons ">search</i></a></li>
                            <li><a href="#"><i className="material-icons">attach_money</i></a></li>
                            <li><a href="#"><i className="material-icons">star</i></a></li>
                            <li><a href="#"><i className="material-icons">shopping_cart</i></a></li>
                            <li><a href="#"><i className="material-icons">person</i></a></li>
                        </ul>
                    </div>
                    <div className="nav-wrapper pink darken-2">
                        <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                        <ul className="left hide-on-med-and-down">
                            <li><Link to="#">Browse Gifts</Link></li>
                        </ul>

                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="#">BirthdayGifts</Link></li>
                            <li><Link to="#">AnniversaryGifts</Link></li>
                            <li><Link to="#">SamedayDeliveryGifts</Link></li>
                        </ul>
                    </div>
                </nav>

                <ul id="slide-out" className="sidenav">
                    <li><a href="#!">Shop By Department</a></li>
                    <li><div className="divider"></div></li>
                    <li><a href="#!" className="waves-effect">Christmas <i class="material-icons right">add</i></a></li>
                    <li><a href="#!" className="waves-effect">Anniversary<i class="material-icons right">add</i></a></li>
                    <li><a href="#!" className="waves-effect">Birthday<i class="material-icons right">add</i></a></li>
                    <li><a href="#!" className="waves-effect">Gift For Him<i class="material-icons right">add</i></a></li>
                    <li><a href="#!" className="waves-effect">Gift For Her<i class="material-icons right">add</i></a></li>
                    <li><a href="#!" className="waves-effect">Home & Garden<i class="material-icons right">add</i></a></li>




                </ul>


            </>

        )
    }
}


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