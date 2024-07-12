
import './App.css';
import { BrowserRouter, Outlet ,Route, Routes} from 'react-router-dom';



import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import ProductsScreen from './Screens/ProductsScreen';
import HomeScreen from './Screens/HomeScreen';



function App() {
  return (
    <>
        
        
        
        <Header/>
        

        <main className='min-h-[calc(100vh-120px)] pt-16' id='root'>
          <Outlet/>
          
        </main>
        <Footer/>
      </>
  );
  }
  export default App

      