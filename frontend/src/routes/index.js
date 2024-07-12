import { createBrowserRouter } from 'react-router-dom';
import App from '../App'

import HomeScreen from '../Screens/HomeScreen';
import data from '../data';
import ProductsScreen from '../Screens/ProductsScreen';
const router = createBrowserRouter([
    {
        path:'/',
        element :<App/>,
        children: [
            {
            path: "",
            element:<HomeScreen />


        },
        {
            path: "product/:id",
            element:<ProductsScreen />
    
    
        },
        
        
        


    ],
   
    
    
    }
])
export default router
