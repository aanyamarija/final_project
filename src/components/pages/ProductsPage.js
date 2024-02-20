import React, { useEffect, useState , useMemo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fecthAllProducts, fetchCategoryProducts } from "../../actions/products.js";
import { filterByPriceAction, filterBySaleAction, sortProductsAction } from "../../reducers/productReducer.js";
import { addItemAction } from "../../reducers/cartReducer.js";
import Button from "../../UI/Button.js";
import s from "../productsPage/ProductsPage.module.css"
import { ROOT_URL } from "../../index.js";

// Импортируем компонент ProductCard
import ProductCard from "../mainPage/ProductCard.js";

function ProductsPage({ type }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { category_title, products } = useSelector(store => store.products);

  // Исправленные переменные состояния и функции для фильтров
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [discountedItems, setDiscountedItems] = useState(false);
  const [sortBy, setSortBy] = useState("default");

  // Вычисляем filteredProducts из products и применяем к ним фильтры
  const filteredProducts = useMemo(() => {
    // Применяем фильтры к продуктам
    let filtered = products.filter(product => {
      // Логика фильтрации здесь
      return true; // Пример: возвращаем true, если продукт соответствует фильтру
    });

    console.log(products);
    // Применяем сортировку
    if (sortBy === "newest") {
      filtered = filtered.sort((a, b) => a.date - b.date);
    } else if (sortBy === "price_high_low") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "price_low_high") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    }

    return filtered;
  }, [products, sortBy]);

  useEffect(() => {
    if (type !== 'category') {
      dispatch(fecthAllProducts(type));
    } else {
      dispatch(fetchCategoryProducts(id));
    }
  }, [dispatch, id, type]);


  //.....
  

  
  function AddToCartHandle(e, obj) {
    e.preventDefault();
    dispatch(addItemAction({ ...obj, count: 1 }));
  }


  const filterProducts = () => {
    // Действия Redux для фильтрации по цене и скидке
    dispatch(filterByPriceAction({ from: priceFrom, to: priceTo }));
    dispatch(filterBySaleAction(discountedItems));
    // Действие Redux для сортировки
    dispatch(sortProductsAction(sortBy));
  };

  return (
    <div>
      {category_title && (
        <div>
          <h3 className={s.categoryTitle}>{category_title}</h3>
        </div>
      )}
      <div className={s.filterContainer}>
        <div className={s.filterItem}>
          <label>Price:</label>
          <input type="text" placeholder="from" value={priceFrom} onChange={(e) => setPriceFrom(e.target.value)} />
          <input type="text" placeholder="to" value={priceTo} onChange={(e) => setPriceTo(e.target.value)} />
        </div>
        <div className={s.filterItem}>
          <label>Discounted items:</label>
          <input type="checkbox" checked={discountedItems} onChange={(e) => setDiscountedItems(e.target.checked)} />
        </div>
        <div className={s.filterItem}>
          <label>Sorted:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">By default</option>
            <option value="newest">Newest</option>
            <option value="price_high_low">Price: High to Low</option>
            <option value="price_low_high">Price: Low to High</option>
          </select>
        </div>
      </div>
      <button className={s.btnFilter} onClick={filterProducts}>Apply Filters</button>
      <div className={s.productsGrid}>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id} 
            product={product}
            onClick={(e) => AddToCartHandle(e, product)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
