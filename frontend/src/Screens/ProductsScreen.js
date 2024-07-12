import React from 'react'
import '../App.css';
import { Link, useParams } from 'react-router-dom';
import data from '../data';


const ProductsScreen = () => {
  const params=useParams()

  console.log(params.id)
  const product = data.products.find(x=>x._id === params.id)
  
  
  return (
    <>
    <div>
      <Link to="/">back to result</Link>
      </div>
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
               Qty:<select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
               </select>
              </li>
              <li>
                <button>Add to cart</button>
              </li>
            </ul>

          </div>

        </div>

      </div>
      </>
    
  )
}

export default ProductsScreen
