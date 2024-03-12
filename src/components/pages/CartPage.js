import { useDispatch, useSelector } from "react-redux"
import { ROOT_URL } from "../../index"
import styles from "../singleProductPage/SingleProductPage.module.css"
import s from "../cartPage/CartPage.module.css"
import style from "../mainPage/ProductCard.module.css"
import { changeCountItem } from "../../reducers/productInfoReducer"
import { useState } from "react";

function CartPage() {

  const { items } = useSelector(store => store.cart)
  const dispatch = useDispatch()

  const product = useSelector(store => store.productInfo)

  const discountPercent = Math.round(((1 - product.discont_price / product.price) * 100));
  const currentPrice = product.discont_price ?? product.price

  console.log(items)


  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });


  const handleChange = (e) => {
    // Обработчик изменения данных в полях формы
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    console.log("Submitted Form Data:", formData);
  };


  return (
    <div className={s.total_wrapper}>
      <div className={s.cart_wrapper}>
        <h1>Shopping Cart</h1>
        <div className={s.wrapper}>
          <div>
            {items.map(el =>
              <div className={s.item_info_wrapper}>
                <div className={s.cart_item}>
                  <img width={150} height={150} src={ROOT_URL + el.image} />

                </div>
                <div className={s.info_wrapper}>

                  <div className={s.title_wrapper}>
                    <h2>{el.title}</h2>
                    <p className={s.close_card}>X</p>
                  </div>

                  <div className={s.price_wrapper}>

                    <div className={styles.btns_count}>
                      <div className={styles.btn_count}>
                        <button onClick={() => dispatch(changeCountItem(-1))}>-</button>
                        <h2>{el.count}</h2>
                        <button onClick={() => dispatch(changeCountItem(1))}>+</button>
                      </div>
                    </div>

                    <div className={style.priceContainer}>
                      <p className={style.productDiscountPrice}> ${el.discont_price ?? el.price}</p>
                      {el.discont_price && <p className={style.productPrice}>${el.price}</p>}
                    </div>

                  </div>


                </div>

              </div>
            )}
          </div>


          <div className={s.form_style}>

            <form onSubmit={handleSubmit}>
              <p>Order details</p>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Order</button>
            </form>
          </div>


        </div>
      </div>
    </div>
  )
}

export default CartPage  