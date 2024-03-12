import { useDispatch } from "react-redux"
import { filterByPriceAction, filterBySaleAction, sortProductsAction } from "../reducers/productReducer"
import { useEffect, useRef } from "react"



function FilterProducts({ type, id }) {
    const checkboxRef = useRef()
    const formRef = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        if (type !== 'sale') {
            checkboxRef.current.checked = false
        }
        formRef.current[0].value = ''
        formRef.current[1].value = ''

    }, [type, id])

    function handleSaleBox(e) {
        dispatch(filterBySaleAction(e.target.checked))
    }

    function priceFormHandler(e) {
        let form_data = new FormData(e.target.parentElement)
        let data = Object.fromEntries(form_data)
        data.from = (data.from) ? +data.from : 0
        data.to = (data.to) ? +data.to : Infinity
        dispatch(filterByPriceAction(data))
    }

    function selectHandler(e) {
        dispatch(sortProductsAction(e.target.value))
    }


    return (
        <div style={{ margin: '10px' }}>
            <form ref={formRef} onKeyUp={priceFormHandler}>
                <input type="number" name="from" placeholder="from" />
                <input type="number" name="to" placeholder="to" />
            </form>

            {type !== 'sale' &&
                <label>
                    Sales products
                    <input ref={checkboxRef} onClick={handleSaleBox} type="checkbox" />
                </label>
            }
            <select onChange={selectHandler}>
                <option value={'defult'}>default</option>
                <option value={'price_asc'}>price asc</option>
                <option value={'price_desc'}>price desc</option>
            </select>
        </div>
    )
}

export default FilterProducts
