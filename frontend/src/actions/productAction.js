import axios from "axios"
import PRODUCT_LIST_REQUEST from'../actions/productAction'
import PRODUCT_LIST_SUCCESS from'../actions/productAction'
import PRODUCT_LIST_FAIL from'../actions/productAction'

import PRODUCT_DETAILS_REQUEST from'../actions/productAction'

import PRODUCT_DETAILS_SUCESS from'../actions/productAction'
import PRODUCT_DETAILS_FAIL from'../actions/productAction'



const listProducts = () =>async(dispatch)=>{
    try{
dispatch({type: PRODUCT_LIST_REQUEST})
const {data} = await axios.get('/')
dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    }catch(erroe){
        dispatch({ type: PRODUCT_LIST_FAIL, payload: Error.message });
    }
}
const detailsProduct = (productId)=>async(dispatch)=>{
    try{
        dispatch({type:PRODUCT_DETAILS_REQUEST, payload: productId})
        const{data} = await axios.get('/product/' + productId)
        dispatch({type: PRODUCT_DETAILS_SUCESS, payload: data})
    }catch(error){
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: data})
    }
}
export default (listProducts, detailsProduct)