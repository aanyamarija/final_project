import { useDispatch, useSelector } from "react-redux"
import { ROOT_URL } from "../../index"
import styles from "../singleProductPage/SingleProductPage.module.css"
import s from "../cartPage/CartPage.module.css"


function CartPage(){

    const {items} = useSelector(store => store.cart)
    const dispatch = useDispatch()

    console.log(items)

    return(
        <div className={s.cart_wrapper}>
             <h1>Shopping Cart</h1>
            {items.map(el => 
            <div className="cart_item">
                <img width={150} height={150} src={ROOT_URL+el.image}/>
                <div className={styles.btns_count}>
                    <button >-</button>
                    <input value={el.count}/>
                    <button>+</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default CartPage