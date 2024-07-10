
import './App.css';
import { Outlet } from 'react-router-dom';



import React from 'react';
import HomeScreen from './Screens/HomeScreen'
import ProductsScreen from './Screens/ProductsScreen'

import Header from './components/Header';
import Footer from './components/Footer';




function App() {
  return (
   
   <div>
    
    
    
    <Header />
    <HomeScreen />
    <Outlet />
    <ProductsScreen />
    
    <Footer />
    
             </div>
             

    );
  }
  export default App

      