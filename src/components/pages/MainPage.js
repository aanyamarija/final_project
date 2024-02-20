import React from 'react'
import Baner from '../mainPage/Baner';
import CategoriesContainer from '../mainPage/CategoriesContainer';
import DiscountForm from '../mainPage/DiscountForm';
import SaleProductsContainer from '../mainPage/SaleProductsContainer';

function MainPage() {
  return (
    <div>
      <Baner/>
      <CategoriesContainer/>
      <DiscountForm/>
      <SaleProductsContainer/>
    </div>
  )
}

export default MainPage;
