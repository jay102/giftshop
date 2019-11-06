import React from 'react';
import ProductListing from '../features/product-listing';
import data from '../data/products.json';
 
export default function Products(){
    return <ProductListing products ={data.products}/>
}