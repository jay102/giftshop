import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductCategory from './pages/ProductCategory';
import Login from './pages/login/login';
import Register from './pages/login/register';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path ="/cart" component={Cart} />
                <Route exact path="/bdaypdts" component={ProductDetail} />
                <Route exact path="/weddingproducts" component={Products} />
                <Route exact path="/christmasproducts" component={Products} />
                <Route exact path="/weddinggift" component={ProductDetail} />
                <Route exact path="/bdaygift" component={ProductDetail} />
                <Route exact path="/xmasgift" component={ProductDetail} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/productcategory" component={ProductCategory} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                
               
            </Switch>

        </>
    )
};

export default Routes;