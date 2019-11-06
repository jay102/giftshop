import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CheckoutProcess from './pages/CheckoutProcess';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path ="/cart" component={Cart} />
                <Route exact path="/bdayproducts" component={ProductDetail} />
                <Route exact path="/weddingproducts" component={Products} />
                <Route exact path="/christmasproducts" component={Products} />
                <Route exact path="/weddinggift" component={ProductDetail} />
                <Route exact path="/bdaygift" component={ProductDetail} />
                <Route exact path="/xmasgift" component={ProductDetail} />
                <Route exact path="/checkout" component={Checkout} />
               
            </Switch>

        </>
    )
};

export default Routes;