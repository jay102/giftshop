import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Login from '../pages/login/login';
import GuestCheckout from '../pages/login/guestCheckout';
import { authActions } from '../actions';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false
        }
    }
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

    openModal = () => {
        this.setState({
            modalIsOpen: true
        });
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        });
    }

    logout =()=>{
        const {dispatch} = this.props
        dispatch(dispatch=>dispatch(authActions.logout()))
    }



    render() {
        var total = this.props.cart.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)

        const { auth } = this.props

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
                            {localStorage.getItem('user') ? <li><Link to="/logout" onClick={this.logout} >Logout</Link></li>
                                : <li><Link to="#"><i className="material-icons modal-trigger" onClick={this.openModal} > person </i> </Link></li>}

                            <Modal isOpen={this.state.modalIsOpen} style={customStyles}>
                                <div style={{ width: "400px", height: "200px", overflow: "hidden" }}  >
                                    <form >
                                        <div className="black-text" style={{ border: "1px solid #9e9e9e", paddingLeft: "10px" }}  >
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
                                        </div >
                                        <button onClick={this.closeModal}>close </button>
                                    </form>
                                </div >
                            </Modal>
                        </ul>

                    </div>

                    {/* guest checkout modal structure   */}

                    <div id="guestModal" className="modal" style={{ width: "400px", height: "200px", overflow: "hidden" }}>
                        <div className="modal-content" onClick={this.closeModal}>
                            <GuestCheckout />
                        </div>
                    </div>

                    {/* signin modal structure  */}

                    <div id="signinModal" className="modal " style={{ width: "45%", overflow: "hidden" }}>
                        <div className="modal-content" onClick={this.closeModal}>
                            <Login />

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
        cart: state.cart,
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Header);


