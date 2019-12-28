import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
     localStorage.setItem("base_url", "http://localhost:5000/api");
     
    return (
        <>
           <BrowserRouter>
                <Header />
                <Routes />
                <Footer />
            </BrowserRouter>
        </>


    )
}
export default App;