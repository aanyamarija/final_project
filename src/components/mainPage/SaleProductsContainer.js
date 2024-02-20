import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import style from "./SaleProductsContainer.module.css"

function SaleProductsContainer() {
  const [saleProducts, setSaleProducts] = useState([]);

  useEffect(() => {
    const fetchSaleProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3333/products/all");
        const randomizedProducts = response.data.sort(() => Math.random() - 0.5);
        setSaleProducts(randomizedProducts);
      } catch (error) {
        console.error("Error fetching sale products:", error);
      }
    };

    fetchSaleProducts();
  }, []);

  const filteredSaleProducts = saleProducts.slice(0, 4);

  return (
    <div className={style.salesWrapper}>
      <div className={style.titleBtnWrapper}>
      <div className={style.SalesTitleBtn}>
        <h2>Sale</h2>
      </div>
      <div className={style.lineBtnWrapper}>
        <div className={style.lineSales}></div>
        <button className={style.SaleBtn}>All sales</button>
      </div>
      </div> 
    
      <div className={style.SaleProductsWrapper}>
        {filteredSaleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}


export default SaleProductsContainer;

