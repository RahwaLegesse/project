/*import React, { useEffect, useState } from 'react'
import data from '../data'
import {Link } from 'react-router-dom';
import ProductsScreen from './ProductsScreen';
import '../App.css';
import axios from 'axios'


const HomeScreen = () => {
  const[products, setProducts] = useState([])
  /*useEffect(()=>{
    const fetchData = async(()=>{
      const {data} = await axios.get("/")
      setProducts(data)
    })
    fetchData()
    return ()=>{
      //
    }
  }, [])
  useEffect(()=>{
    const fetchData= async () => {
    
      const {data} = await axios.get("/");
      setProducts(data);
    } 
    fetchData()
  }, [])
    
  console.log(products)
  
  return <ul className="products">
    

    {
    products  products.map(product=>
    <li>
    <div className="product">
    

    <Link to={'http://localhost:3000/product/'+ product._id}> 
        <img className="product-image"src={product.Image} alt="image dress" />
        </Link> 
        <div className="product-name">{product.name}</div>
        <Link to={'http://localhost:3000/product/ product._id' + product._id}>{product.name} </Link>
        <div className="product-brand">{product.brand}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-rating">{product.rating}</div>
            </div>
        </li>)





    
</ul>

  
}

export default HomeScreen
const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    return () => {
      // Cleanup (if needed)
    };
  }, [])

  return (
    <ul className="products">
      
      
        products.map(product=>
          <li key={product._id}>
            <div className="product">
              <Link to={`/product/${product._id}`}>
                <img className="product-image" src={product.Image} alt="image dress" />
              </Link>
              <div className="product-name">{product.name}</div>
              <Link to={`/product/${product._id}`}>{product.name}</Link>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">{product.price}</div>
              <div className="product-rating">{product.rating}</div>
            </div>
          </li>
        ))
    </ul>
  );
};

export default HomeScreen;*/
import React from 'react'

import {Link } from 'react-router-dom';
import ProductsScreen from './ProductsScreen';
import '../App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import data from '../data';


const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/product");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    
  }, [])

  return (
    
    
    <ul className="products">

    {
    products.map(product=>
    <li key={product._id}>
    <div className="product">
    <Link to={'http://localhost:3000/product/'+ product._id}> 
        <img className="product-image"src={product.Image} alt="image dress" />
        </Link> 
        <div className="product-name">{product.name}</div>
        
        <Link to={'http://localhost:3000/product/' + product._id }>{product.name} </Link>
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


