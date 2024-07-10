import React from 'react'
import data from '../data'
import {Link } from 'react-router-dom';
import ProductsScreen from './ProductsScreen';
import '../App.css';


const HomeScreen = () => {
  return (
    
    
    <ul className="products">

    {
    data.products.map(product=>
    <li>
    <div className="product">
        <img className="product-image"src={product.Image} alt="image dress" />
        <div className="product-name">{product.name}</div>
        <Link to={'http://localhost:3000/product'}>{product.name} </Link>
        <div className="product-brand">{product.brand}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-rating">{product.rating}</div>
            </div>
        </li>)
}


    
</ul>

  )
}

export default HomeScreen
