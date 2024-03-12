import React from 'react';
import styles from "./ProductCard.module.css"

function ProductCard({ product, categoryId }) {
  const discountPercent = Math.round(((1 - product.discont_price / product.price) * 100));
  const currentPrice = product.discont_price ?? product.price

  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productCard}>

        <img className={styles.productImage} src={`http://localhost:3333${product.image}`} alt={product.title} />
        <div className={styles.textPriceContainer}>

          <h3 className={styles.productTitle}>{product.title}</h3>

          <div className={styles.priceContainer}>
            {/* changed */}
            <p className={styles.productDiscountPrice}> ${currentPrice}</p>
            {product.discont_price && <p className={styles.productPrice}>${product.price}</p>}
          </div>

        </div>

        {product.discont_price && <div className={styles.overlayDiscount}>
          <p>-{discountPercent}%</p>
        </div>}

      </div>

    </div>
  );
}

export default ProductCard;

