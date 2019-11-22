import React from 'react';
import {Link } from 'react-router-dom';
import bday from '../img/bday.jpg';
import xmas from '../img/xmas.jpg';
import anniversary from '../img/anniversary.jpg';
import forhim from '../img/forhim.jpg';
import forher from '../img/forher.jpg';
import homegarden from '../img/homegarden.jpg';

function ProductCategory() {
    return (
        <div >
            <br /><br /><br />
            <div className="row">
                <div className="col s4">
                 <Link to ="/products"  ><img src={bday} className="responsive-img " /></Link> 
                    <p>Birthday Gift</p>
                </div>
                <div className="col s4">
                    <Link to ="/products "><img src={anniversary} className="responsive-img " /></Link>
                    <p>Anniversary Gift</p>
                </div>
                <div className="col s4">
                    <Link to = "/products"><img src={xmas} className="responsive-img " /></Link>
                    <p>Christmas Gift</p>
                </div>
            </div>

            <div className="row">
                <div className="col s4">
                    <Link to = "/products" ><img src={forhim}  className="responsive-img " /></Link>
                    <p>Gift for him</p>
                </div>
                <div className="col s4">
                    <Link to = "/products" ><img src={forher} className="responsive-img " /></Link>
                    <p>Gift for her</p>
                </div>
                <div className="col s4">
                    <Link to = "/products" ><img src={homegarden} className="responsive-img " /></Link>
                    <p>Home & Garden</p>
                </div>

            </div>
        </div>


    )
}
export default ProductCategory;