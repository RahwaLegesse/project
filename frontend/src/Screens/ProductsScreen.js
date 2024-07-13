import React, { useEffect } from 'react'
import '../App.css';
import { Link, useParams } from 'react-router-dom';
import data from '../data';
import { useDispatch, useSelector } from 'react-redux';

import detailsProduct from'../actions/productAction'

const ProductsScreen = () => {
const [qty, setQty]= useState(1)
  

  const productDetails = useSelector(state =>state.productDetails)
  const{ product, loading, error} = productDetails
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(detailsProduct()); 
  }, []); 

  
  
  
  return (
    <>
    <div>
      <Link to="/">back to result</Link>
      </div>
      {loading?<div>loading...</div>:
      error? <div>{error}</div>:
      
      <div className='details'>
        <div className='details_image'>
          <Link to={product.Image}>
        
        <img src={product.Image} alt="image dress" />
        </Link>
        </div>
        <div className='detail_info'>
          <ul>
            <li>{product.name}</li>
          
          
          <li>
            <h4>{product.name}</h4>
            
            </li>
            <li>
            <h4>{product.rating}</h4>
            
            </li>
            <li>
            <b>{product.price}</b>
            
            </li>
            <li>
              Description
              <div>
             {product.description}
              </div>
            </li>
            
          </ul>
          <div className='detail_action'>
            <ul>
              <li>
                price:{product.price}
              </li>
              <li>
                Status:{product.status}
              </li>
              <li>
               Qty:<select value={qty} onChange={(e)=> {setQty(e.target.value)}}>
                {[...Array (product.countInStock).keys()].map(x=>
                  <option key= {x + 1}
                  value={x + 1}>{x + 1} </option>
                )}
                
               </select>
              </li>
              <li>
                <button>Add to cart</button>
              </li>
            </ul>

          </div>

        </div>

      </div>
}
      </>
    
  )
}



export default ProductsScreen
