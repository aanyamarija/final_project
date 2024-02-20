import './App.css';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import MainPage from './components/pages/MainPage';
import CategoriesPage from './components/pages/CategoriesPage';
import ProductsPage from './components/pages/ProductsPage';
import SingleProductPage from './components/pages/SingleProductPage';
import CartPage from './components/pages/CartPage';
import NotFoundPage from './components/pages/NotFoundPage';
import store from './store';

function App() {
  return (
  <Provider store={store}> 
  <Router>
      <div className='wrapper'>
        <Header/>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/categories' element={<CategoriesPage />} />
            <Route path='/category/products/:id' element={<ProductsPage type='category' />} />
            <Route path='/products/all' element={<ProductsPage type='all' />} />
            <Route path='/products/sale' element={<ProductsPage type='sale' />} />
            <Route path='/product/:id' element={<SingleProductPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        <Footer/>
      </div>
  </Router>
  </Provider> 
  );
}

export default App;
