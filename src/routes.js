import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductCategory from './pages/ProductCategory';
import Login from './pages/login/login';
import Register from './pages/login/register';
import Logout from './pages/login/Logout';
import {PrivateRoute} from './privateRoute';
import ProductAdminDashBoard from './pages/adminDashBoardProduct';
import CategoryAdminDashboard from './pages/adminDashBoardCategory';


const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/bdaypdts" component={ProductDetail} />
                <Route exact path="/weddingproducts" component={Products} />
                <Route exact path="/christmasproducts" component={Products} />
                <Route exact path="/weddinggift" component={ProductDetail} />
                <Route exact path="/bdaygift" component={ProductDetail} />
                <Route exact path="/xmasgift" component={ProductDetail} />
                <PrivateRoute exact path="/checkout" component={Checkout} />
                <Route exact path="/category" component={ProductCategory} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/admin-category" component={CategoryAdminDashboard}/>
                <Route exact path="/admin-product" component={ProductAdminDashBoard}/>
                <Route exact path="/logout" component={Logout} />



            </Switch>

        </>
    )
};

export default Routes;