import {configureStore} from '@reduxjs/toolkit'
//import configureStore from './store'; // Remove the curly braces

import productListReducer from './reducers/productReducer'
export const store = configureStore({

    reducer:{
        productList:productListReducer/* productListReducer is a function which uses current state and acvtion to change the state
        so in here productList is a new state*/
    }
    

})
export default store


