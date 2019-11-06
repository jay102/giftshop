import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
//import './index.css';
// import "mdbreact/dist/css/mdb.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
import App from './App';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
    <>
        <Provider store={store}>
            <App />
        </Provider>
    </>, document.querySelector("#root"));


