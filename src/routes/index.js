import { createBrowserRouter } from 'react-router-dom';
import App from '../App'

import HomeScreen from '../Screens/HomeScreen';
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
            path: "product",
            element:<ProductsScreen />
    
    
        },
        


    ],
   
    
    
    }
])
export default router
