import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductDescription } from "../../actions/products"
import { useParams } from "react-router-dom"
import { ROOT_URL } from "../../index"
import { changeCountItem } from "../../reducers/productInfoReducer"
import { addItemAction } from "../../reducers/cartReducer"
import Button from "../../UI/Button"
import s from "../singleProductPage/SingleProductPage.module.css"
import styles from "../mainPage/../mainPage/ProductCard.module.css"


function SingleProductPage() {

  const dispatch = useDispatch()
  const product = useSelector(store => store.productInfo)
  /*const {items} = useSelector(store => store.cart)*/
  const { id } = useParams()

  console.log(product)

  useEffect(() => {
    dispatch(fetchProductDescription(id))
  }, [dispatch])

  const discountPercent = Math.round(((1 - product.discont_price / product.price) * 100));

  return (
    <div className={s.single_page_wrapper}>
      <div className={s.single_productImage}>
      <img className={s.single_img}  width={500} height={500} src={ROOT_URL + product.image} />
      </div>
    
      <div className={s.info_wrapper}>
      
        
          <div className={s.price}>
          <div className={s.title_product}>
          <h2>{product.title}</h2>
          </div>
         
            <div className={styles.priceContainer}>
              <p className={styles.productDiscountPrice}> ${product.discont_price}</p>
              <p className={styles.productPrice}>${product.price}</p>
              <div className={s.discount_price}>
              <p>-{discountPercent}%</p>
              </div>
            
            
            </div>
           

          </div>

          <div className={s.btns_count}>
            <div className={s.btn_count}>
            <button onClick={() => dispatch(changeCountItem(-1))}>-</button>
            <h2>{product.count}</h2>
            <button onClick={() => dispatch(changeCountItem(1))}>+</button>
            </div>
        
            <Button onClick={() => dispatch(addItemAction(product))} text='Add to cart' />
          </div>
     

          <div className={s.description}>
            <p className={s.description_title}>Description </p>
            <p className={s.text}>{product.description}</p>
          </div>

        </div>

    

    </div>
  )
}

export default SingleProductPage;

